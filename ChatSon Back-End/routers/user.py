from typing import Any
from fastapi import APIRouter

from schemas.user import UserDisplay, UserBase
from services.user import user


router = APIRouter()


@router.post("/", response_model=UserDisplay)
def create_user(request: UserBase) -> Any:
    """
    Create user
    :param request: **UserBase**
    :return: **UserDisplay**

    """
    return user.create(request=request)


@router.get("/{username}", response_model=UserDisplay)
def get_user(username: str) -> Any:
    """
    Get user
    :param username: **str**
    :return: **UserDisplay**
    """
    return user.get(username=username)


@router.get("/", response_model=list[UserDisplay])
def get_users() -> Any:
    """
    Get all users
    :return: **list[UserDisplay]**
    """
    return user.get_all()
