from pydantic import BaseSettings

class Settings(BaseSettings):
    WORKSPACE_PATH: str = "workspace"

    class Config:
        env_file = "../.env"

settings = Settings()
