from typing import Any
from fastapi import APIRouter

from schemas.user import UserDisplay, UserBase
from services.user import user


router = APIRouter()


@router.post('/', response_model=UserDisplay)
def create_user(request: UserBase) -> Any:
    return user.create(request=request)

@router.get('/{username}', response_model=UserDisplay)
def get_user(username: str) -> Any:
    return user.get(username=username)

@router.get('/', response_model=list[UserDisplay])
def get_users() -> Any:
    return user.get_all()