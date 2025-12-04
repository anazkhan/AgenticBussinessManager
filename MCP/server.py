# mcp/server.py
from fastmcp import MCPApp  # assumes fastmcp library; see instructions below
from tools.read_file import read_file
from tools.write_file import write_file
from tools.list_files import list_files
from tools.get_current_directory import get_current_directory
from tools.metadata import (
    read_metadata,
    create_metadata_file,
    update_metadata_for_file,
    refresh_metadata_for_all_files,
)

app = MCPApp()

# register tools on the MCP app (decorator style is also supported by fastmcp)
# here we register by attaching the functions directly:
app.register_tool(read_file)
app.register_tool(write_file)
app.register_tool(list_files)
app.register_tool(get_current_directory)
app.register_tool(read_metadata)
app.register_tool(create_metadata_file)
app.register_tool(update_metadata_for_file)
app.register_tool(refresh_metadata_for_all_files)


if __name__ == "__main__":
    # If fastmcp provides a run/serve helper you can call that; otherwise use CLI 
    print("MCP server module loaded. Use `fastmcp serve mcp.server:app --port 5001` to start the server.")
