# import sys, os

# PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
# BACKEND_PATH = os.path.join(PROJECT_ROOT, "Backend")
# BUILDER_PATH = os.path.join(PROJECT_ROOT, "BuilderAgent")

# # Add both to Python path
# sys.path.insert(0, PROJECT_ROOT)
# sys.path.insert(0, BACKEND_PATH)
# sys.path.insert(0, BUILDER_PATH)


from fastapi import FastAPI
from routes.generate import router as generate_code 

# # Path to project root (AgenticBussinessManager)
# PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
# sys.path.insert(0, PROJECT_ROOT)



app = FastAPI(title="Agentic Builder API")

app.include_router(generate_code, prefix="")

@app.get("/")
def root():
    return {"message": "Agentic builder backend running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
