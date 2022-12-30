from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from core.config import settings
# check same thread = false
engine = create_engine(settings.SQLAlCHEMY_DATABASE_URI, 
                          connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine, expire_on_commit=False
)
