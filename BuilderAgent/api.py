from fastapi import FastAPI
from BuilderAgent.Graph import agent, mcp_client

app = FastAPI()

@app.post("/invoke")
async def invoke_agent(prompt: dict):
    async with mcp_client:
        result = await agent.ainvoke(
            {"user_prompt": prompt["user_prompt"]},
            {"recursion_limit": 120}
        )
    return result