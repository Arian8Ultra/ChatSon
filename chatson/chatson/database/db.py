# ---------- imports ----------
# pip install sqlalchemy
# sqllachemy is an ORM (Object Relational Mapper) library for python

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# why sqlite?
# because it's a lightweight database that doesn't require a separate server process

# SQLALCHEMY_DATABASE_URL: is a connection string that tells SQLAlchemy how to connect to the database
SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

# create_engine(): is a function that takes a connection string as an argument and returns a database engine

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# sessionmaker(): is a factory function that returns a class that represents a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# declarative_base(): is a function that returns a class that represents a declarative base
Base = declarative_base()
