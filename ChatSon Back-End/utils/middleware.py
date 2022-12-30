from fastapi import Depends, HTTPException
from sqlalchemy import exists
from starlette import status
from authentication.oauth import get_current_user

from database import SessionLocal
from models import Follow
from schemas.user import UserAuth
from services.user import user as user_service


async def user_is_blocked(username: str, request_user: UserAuth = Depends(get_current_user)):
    with SessionLocal() as session:
        user = user_service.get_profile_by_username(request_user.get('username'))
        user_ref = user_service.get_profile_by_username(username)
        
        if (user and user_ref) and session.query(exists().where(Follow.user_id == user_ref.id, Follow.user_ref_id == user.id, Follow.is_blocked == True)).scalar():
            raise HTTPException(detail='User is blocked', status_code=status.HTTP_200_OK)
        
