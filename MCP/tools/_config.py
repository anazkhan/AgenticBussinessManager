# mcp/tools/_config.py
import os

# workspace root is ../workspace relative to the mcp package location
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__),"..",".."))
WORKSPACE_ROOT = os.path.join(BASE_DIR, "workspace")

METADATA_DIR = os.path.join(WORKSPACE_ROOT, ".project_metadata")
METADATA_INDEX = os.path.join(METADATA_DIR, "metadata.json")
PER_FILE_METADATA_DIR = os.path.join(METADATA_DIR, "files")

# ensure folders exist when tools import config
os.makedirs(WORKSPACE_ROOT, exist_ok=True)
os.makedirs(METADATA_DIR, exist_ok=True)
os.makedirs(PER_FILE_METADATA_DIR, exist_ok=True)
