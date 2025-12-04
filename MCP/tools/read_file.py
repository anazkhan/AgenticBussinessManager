# mcp/tools/read_file.py
import os
from ._config import WORKSPACE_ROOT

def read_file(path: str) -> str:
    """
    Read file content from workspace. Path is relative to workspace root.
    Returns empty string if file not found.
    """
    fp = os.path.join(WORKSPACE_ROOT, path)
    try:
        with open(fp, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return ""
    except Exception as e:
        # Return an error message string for easier debugging by client agents
        return f"__ERROR__: failed to read {path}: {e}"
