# mcp/tools/get_current_directory.py
from ._config import WORKSPACE_ROOT

def get_current_directory() -> str:
    """
    Return absolute path of the workspace root used by the MCP server.
    """
    return WORKSPACE_ROOT
