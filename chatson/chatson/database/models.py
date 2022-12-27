# --------- Models ---------
# This file contains the models for the database

# ---------- imports ----------
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

# import the base class from db.py
from .db import Base

# ---------- Models ----------
# user model
class User(Base):
    """this is a user model for the database

    Args:
        Base (_DeclT@declarative_base): this is a class that represents a declarative base
    """

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    is_active = Column(Boolean, default=True)
    token = Column(String, unique=True, index=True)


# anonymous user model (inherits from user model)
class AnonymousUser(User):
    """this is an anonymous user model for the database

    Args:
        User (User): this is a user model for the database
    """

    __tablename__ = "anonymous_users"

    id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    username = Column(String, unique=True, index=True)


# normal user model (inherits from user model)
class NormalUser(User):
    """this is a normal user model for the database

    Args:
        User (User): this is a user model for the database
    """

    id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    name = Column(String)
    surname = Column(String)
    joined_at = Column(DateTime)
    last_seen = Column(DateTime)
    email = Column(String, unique=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    is_admin = Column(Boolean, default=False)
    is_banned = Column(Boolean, default=False)
    is_verified = Column(Boolean, default=False)
    is_online = Column(Boolean, default=False)
