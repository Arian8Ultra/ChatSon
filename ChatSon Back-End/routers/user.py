from typing import Any
from fastapi import APIRouter

from schemas.user import UserDisplay, UserBase
from services.user import user


router = APIRouter()


@router.post('/', response_model=UserDisplay)
def create_user(request: UserBase) -> Any:
    return user.create(request=request)
