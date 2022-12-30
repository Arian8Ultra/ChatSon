# methods for database operations

from database import SessionLocal, engine
from models import User, Follow
# any
from typing import Any

def all_users():
    with SessionLocal() as session:
        users = session.query(User).filter(User.is_active == True).all()
        return users
def get_user_by_username(username: str):
    with SessionLocal() as session:
        user = session.query(User).filter(User.username == username, User.is_active == True).first()
        return user
def get_user_by_id(id: int):
    with SessionLocal() as session:
        user = session.query(User).filter(User.id == id, User.is_active == True).first()
        return user
def get_user(username: str):
    with SessionLocal() as session:
        user: Any = session.query(User).filter(User.username == username).first()
        return user
def count_users():
    with SessionLocal() as session:
        count = session.query(User).count()
        return count
