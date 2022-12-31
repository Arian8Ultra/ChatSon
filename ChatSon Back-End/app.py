from fastapi import FastAPI
from core.config import settings
from routers.routers import api_router
from database import engine, Base
from fastapi.middleware.cors import CORSMiddleware
import logging

logger = logging.getLogger(__name__)
origins = ["*"]


app = FastAPI(title=settings.PROJECT_NAME, openapi_url=settings.OPEN_API)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_database():
    logger.info("creating initial data")
    Base.metadata.create_all(bind=engine)
    logger.info("Initial data created")
    


app.include_router(api_router)
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
