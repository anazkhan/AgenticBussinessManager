# Backend service for code generation
# Communicates with BuilderAgent via HTTP API

import httpx

async def generate_code_from_prompt(prompt: str):
    """
    Send a code generation request to the BuilderAgent service.
    
    Args:
        prompt: User's prompt for code generation
        
    Returns:
        Generated code result from BuilderAgent
    """
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://builderagent:8001/invoke",
            json={"user_prompt": prompt}
        )
        return response.json()
