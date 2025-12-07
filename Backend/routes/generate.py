from fastapi import APIRouter
from pydantic import BaseModel
from services.coderagent import generate_code_from_prompt
from models.generate_model import GenerateRequest

router = APIRouter()

@router.post("/generate")
async def generate_website(data: GenerateRequest):
    result = await generate_code_from_prompt(data.prompt)
    return {"status": "success", "result": result}
