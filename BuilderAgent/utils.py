#from langchain.tools import StructuredTool
from langchain_core.tools import StructuredTool 
from typing import Any, List

async def make_langchain_tools_from_mcp(mcp_client) -> List[StructuredTool]:
    """Convert MCP tools to LangChain StructuredTools"""
    
    tools_metadata = await mcp_client.list_tools()
    lc_tools = []
    
    for tool_meta in tools_metadata:
        def make_async_tool_func(tool_name):
            async def call_tool(**kwargs):
                result = await mcp_client.call_tool(
                    name=tool_name,
                    arguments=kwargs
                )
                return str(result)
            return call_tool
            
        def make_sync_tool_func(tool_name):
            def call_tool(**kwargs):
                raise NotImplementedError(f"Tool {tool_name} is async-only. Use ainvoke.")
            return call_tool
        
        lc_tool = StructuredTool.from_function(
            func=make_sync_tool_func(tool_meta.name),
            coroutine=make_async_tool_func(tool_meta.name),
            name=tool_meta.name,
            description=tool_meta.description or "MCP Tool",
            args_schema=tool_meta.inputSchema
        )
        lc_tools.append(lc_tool)
    
    return lc_tools
