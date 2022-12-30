from typing import Any
from fastapi import APIRouter, Depends

from authentication.oauth import get_current_user
from schemas.like import LikeResponse
from schemas.user import UserAuth
from services.like import like


router = APIRouter()


@router.post('/{tweet_id}', response_model=LikeResponse)
async def create_like(tweet_id: int, request_user: UserAuth = Depends(get_current_user)) -> Any:
    return like.create(tweet_id, request_user=request_user)
