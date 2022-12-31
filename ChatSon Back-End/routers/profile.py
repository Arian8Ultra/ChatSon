from typing import Any, List
from fastapi import APIRouter, Depends
from authentication.oauth import get_current_user
from models.user import Follow

from schemas.user import UserAuth, UserDisplay, UserBase, UserProfileDisplay
from services.user import user
from utils.middleware import user_is_blocked

router = APIRouter()


@router.get("/", response_model=List[UserDisplay])
def get_profiles() -> Any:
    return user.get_all()


@router.get(
    "/{username}",
    response_model=UserProfileDisplay,
    dependencies=[Depends(user_is_blocked)],
)
def get_profile(username: str) -> Any:
    return user.get_profile_by_username(username=username)


@router.patch("/deactivate/")
def deactivate(request_user: UserAuth = Depends(get_current_user)) -> Any:
    return user.deactivate_account(request_user=request_user)
