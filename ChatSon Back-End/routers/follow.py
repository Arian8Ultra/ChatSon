from typing import Any, List
from fastapi import APIRouter, Depends, Response
from authentication.oauth import get_current_user

from schemas.user import UserAuth, UserProfileResponse
from schemas.follow import FollowRequest, FollowResponse
from services.follow import follow_service


router = APIRouter()


@router.post("/", response_model=FollowResponse)
def follow(request: FollowRequest, request_user: UserAuth = Depends(get_current_user)):
    """Follow user
    :param request: **FollowRequest**
    :param request_user: **UserAuth
    :return: **FollowResponse**
    """
    return follow_service.create(request, request_user)


@router.get("/{username}/followings", response_model=List[UserProfileResponse])
def followings(username: str):
    """
    Get followings of user
    :param username: **str**
    :return: **List[UserProfileResponse]
    """
    return follow_service.get_followings(username)


@router.get("/{username}/followers", response_model=List[UserProfileResponse])
def followers(username: str):
    """
    Get followers of user
    :param username: **str**
    :return: **List[UserProfileResponse]
    """
    return follow_service.get_followers(username)


@router.patch("/{username}/block", response_model=FollowResponse)
def block(username: str, request: UserAuth = Depends(get_current_user)):
    """ Block user
    :param username: **str**
    :param request: **UserAuth**
    :return: **FollowResponse**
    """
    return follow_service.create_block(username, request)


@router.patch("/{username}/unblock", response_model=FollowResponse)
def unblock(username: str, request: UserAuth = Depends(get_current_user)):
    """
    Unblock user
    :param username: **str**
    :param request: **UserAuth**
    :return: **FollowResponse**
    """
    return follow_service.unblock(username, request)
