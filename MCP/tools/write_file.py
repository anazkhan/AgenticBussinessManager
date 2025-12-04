# mcp/tools/write_file.py
import os
import tempfile
from ._config import WORKSPACE_ROOT

def write_file(path: str, content: str) -> str:
    """
    Atomic write of file content into workspace.
    Returns a success string or raises on critical errors.
    """
    fp = os.path.join(WORKSPACE_ROOT, path)
    dirpath = os.path.dirname(fp)
    os.makedirs(dirpath, exist_ok=True)

    # atomic write: write to temp file then replace
    fd, tmp_path = tempfile.mkstemp(dir=dirpath)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as tmpf:
            tmpf.write(content)
        os.replace(tmp_path, fp)
    except Exception as e:
        # cleanup
        try:
            os.remove(tmp_path)
        except Exception:
            pass
        raise e

    return f"OK: wrote {path}"
