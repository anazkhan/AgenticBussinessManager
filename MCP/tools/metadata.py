# mcp/tools/metadata.py
import os
import json
import re
from ._config import METADATA_INDEX, PER_FILE_METADATA_DIR, WORKSPACE_ROOT

# --- helpers ---
def _safe_write_json(path: str, obj):
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2)
    os.replace(tmp, path)

def _extract_basic_metadata(path: str, content: str):
    """
    Lightweight metadata extraction. This is intentionally small and fast.
    Later we will expand to AST-derived semantic_blocks.
    """
    # imports (rough, handles common JS/TS/ESM syntax)
    imports = re.findall(r'(?:from\s+["\']([^"\']+)["\']|import\s+["\']([^"\']+)["\'])', content)
    # flatten tuples and keep only local file imports
    imports_flat = []
    for a, b in imports:
        imp = a or b
        if imp and (imp.startswith(".") or imp.endswith(".css")):
            imports_flat.append(imp)

    exports = re.findall(r'export\s+(?:default\s+)?(?:const|function|class|let|var)?\s*([A-Za-z0-9_]+)?', content)
    exports = [e for e in exports if e]

    # very small heuristic for ui elements
    ui_keywords = ["<button", "<input", "<form", "<label", "className=", "style="]
    ui_elements = [k.strip("<") for k in ui_keywords if k in content]

    return {
        "file": path,
        "imports": imports_flat,
        "exports": exports,
        "ui_elements": ui_elements
    }

# --- API tools ---
def read_metadata() -> dict:
    """Return metadata index object (if missing returns {})."""
    if not os.path.exists(METADATA_INDEX):
        return {}
    with open(METADATA_INDEX, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except Exception:
            return {}

def create_metadata_file(initial_metadata: dict = None) -> str:
    """Create metadata index file. If exists, will not overwrite unless initial_metadata passed."""
    data = initial_metadata or {}
    if os.path.exists(METADATA_INDEX) and initial_metadata is None:
        return "OK: metadata already exists"
    _safe_write_json(METADATA_INDEX, data)
    return "OK: created metadata index"

def update_metadata_for_file(path: str, metadata: dict) -> str:
    """
    Write per-file metadata and update index.
    metadata is expected to be a JSON-serializable dict describing the file.
    """
    # write per-file metadata
    perfile_path = os.path.join(PER_FILE_METADATA_DIR, path.replace("/", "__") + ".json")
    perdir = os.path.dirname(perfile_path)
    os.makedirs(perdir, exist_ok=True)
    _safe_write_json(perfile_path, metadata)

    # update the master index
    index = read_metadata()
    index[path] = metadata
    _safe_write_json(METADATA_INDEX, index)
    return f"OK: metadata updated for {path}"

def refresh_metadata_for_all_files() -> str:
    """
    Walk the workspace and regenerate basic metadata for each file.
    This is a convenience: it's ok to be slow for now.
    """
    index = {}
    for root, _, files in os.walk(WORKSPACE_ROOT):
        for fname in files:
            rel = os.path.relpath(os.path.join(root, fname), WORKSPACE_ROOT).replace("\\", "/")
            if not rel:
                continue
            # ignore metadata dir itself
            if rel.startswith(".project_metadata"):
                continue
            # only ID target file types
            if not rel.endswith((".js", ".ts", ".jsx", ".tsx", ".html", ".css")):
                continue
            try:
                with open(os.path.join(root, fname), "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception:
                content = ""
            meta = _extract_basic_metadata(rel, content)
            index[rel] = meta
            # write per-file
            perfile_path = os.path.join(PER_FILE_METADATA_DIR, rel.replace("/", "__") + ".json")
            os.makedirs(os.path.dirname(perfile_path), exist_ok=True)
            _safe_write_json(perfile_path, meta)

    _safe_write_json(METADATA_INDEX, index)
    return "OK: refreshed metadata for all files"
