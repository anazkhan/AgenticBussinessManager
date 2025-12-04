# mcp/tools/list_files.py
import os
from ._config import WORKSPACE_ROOT

def list_files(path: str = "") -> list:
    """
    Recursively list files under workspace (relative paths).
    If path is provided, list under that subdirectory.
    """
    root = os.path.join(WORKSPACE_ROOT, path) if path else WORKSPACE_ROOT
    out = []
    if not os.path.exists(root):
        return out

    for dirpath, _, files in os.walk(root):
        for name in files:
            full = os.path.join(dirpath, name)
            rel = os.path.relpath(full, WORKSPACE_ROOT)
            out.append(rel.replace("\\", "/"))
    return out
