from typing import Any
from fastapi import APIRouter, Depends

from authentication.oauth import get_current_user
from schemas.retweet import RetweetRequest, RetweetResponse
from schemas.user import UserAuth
from services.retweet import retweet


router = APIRouter()


@router.patch("/{tweet_id}", response_model=RetweetResponse)
async def create_retweet(
    tweet_id: int,
    request: RetweetRequest,
    request_user: UserAuth = Depends(get_current_user),
) -> Any:
    return retweet.create(tweet_id, request, request_user=request_user)
