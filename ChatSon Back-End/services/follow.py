
from datetime import datetime
from fastapi import HTTPException
from sqlalchemy.sql import exists
from starlette import status
from typing import List, Any

from models import Follow, User
from schemas.follow import FollowRequest
from schemas.user import UserAuth

from services.user import user as user_service
from database import SessionLocal


class FollowService:
    def create(self, request: FollowRequest, request_user: UserAuth) -> Follow:
        with SessionLocal() as session:
            user = user_service.get_profile_by_id(request_user['id'])
            user_ref = user_service.get_profile_by_id(request.user_ref)
            if user and user_ref:
                if session.query(exists().where(Follow.user_id == user.id, Follow.user_ref_id == user_ref.id)).scalar():
                    raise HTTPException(detail='you are already following this user', status_code=status.HTTP_200_OK)

                follow  = Follow(user_ref_id=user_ref.id, user_id=user.id, is_followed=True)
                session.add(follow)
                session.commit()
                session.close()

                return follow
    
    def get_followings(self, username: str) -> List[User]:
        profiles = []
        with SessionLocal() as session:
            user = user_service.get_profile_by_username(username)
            followings = session.query(Follow).filter(Follow.user == user).all()
            for profile in followings:
                profiles.append(profile.user_ref)
            
        return profiles

    def get_followers(self, username: str) -> List[User]:
        profiles = []
        with SessionLocal() as session:
            user = user_service.get_profile_by_username(username)
            followers = session.query(Follow).filter(Follow.user_ref == user).all()
            for profile in followers:
                profiles.append(profile.user)
            
        return profiles
    
    def create_block(self, username: str, request: UserAuth) -> Follow:
        follow: Any = None
        with SessionLocal() as session:
            user_ref = user_service.get_profile_by_username(username)
    
            if session.query(exists().where(Follow.user_id == request.get('id'), Follow.user_ref_id == user_ref.id)).scalar():
                follow = session.query(Follow).filter(Follow.user_id == request.get('id'), Follow.user_ref_id == user_ref.id).first()
                follow.is_followed = False
                follow.is_blocked = True
                follow.updated_at = datetime.now()
            else:
                follow = Follow(user_ref_id=user_ref.id, user_id=user.id, is_blocked=True)
                session.add(follow)
            session.commit()
        
        return follow
    
    def unblock(self, username: str, request: UserAuth) -> Follow:
        follow: Any = None
        with SessionLocal() as session:
            user_ref = user_service.get_profile_by_username(username)
            if session.query(exists().where(Follow.user_id == request.get('id'), Follow.user_ref_id == user_ref.id)).scalar():
                follow = session.query(Follow).filter(Follow.user_id == request.get('id'), Follow.user_ref_id == user_ref.id).first()
                follow.is_blocked = False 
                follow.updated_at = datetime.now()
            session.commit()
        return follow


follow_service = FollowService()
