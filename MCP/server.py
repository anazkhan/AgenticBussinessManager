# mcp/server.py
from fastmcp import FastMCP 
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

app = FastMCP()

# register tools on the MCP app (decorator style is also supported by fastmcp)
# here we register by attaching the functions directly:
app.tool()(read_file)
app.tool()(write_file)
app.tool()(list_files)
app.tool()(get_current_directory)
app.tool()(read_metadata)
app.tool()(create_metadata_file)
app.tool()(update_metadata_for_file)
app.tool()(refresh_metadata_for_all_files)

if __name__ == "__main__":
    # If fastmcp provides a run/serve helper you can call that; otherwise use CLI 
    app.run(transport="http", host="0.0.0.0", port=5001)

    print("MCP server module loaded. Use `fastmcp run MCP/server.py:app` to start the server.")
