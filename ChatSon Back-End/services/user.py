from fastapi import Response, status, HTTPException
from typing import Any, List
from fastapi.encoders import jsonable_encoder

from database import SessionLocal
from models import User, Follow
from utils.hash import Hash
from schemas.user import UserAuth, UserBase
from datetime import datetime
from database import count_users


class UserService:
    def create(self, request: UserBase, session = SessionLocal()) -> User:     
        obj_in_data = jsonable_encoder(request)
        if session.query(User).filter(User.email == obj_in_data['email']).first():
            raise HTTPException(status_code=400, detail='User already exists')
        
        obj_in_data['password'] = Hash.bcrypt(request.password)
        obj_in_data['created_at'] = datetime.now()
        obj_in_data['updated_at'] = datetime.now()
        obj_in_data['id'] = count_users() + 1
        db_obj = User(**obj_in_data)     
        
        session.add(db_obj)
        session.commit()
        session.refresh(db_obj)
        session.close()
        return db_obj
    
    def get_all(self) -> List[User]:
        with SessionLocal() as session:
            users = session.query(User).filter(User.is_active == True).all()

            return users

    def get_profile_by_username(self, username: str) -> User:
        with SessionLocal() as session:
            user = session.query(User).filter(User.username == username, User.is_active == True).first()

            if not user:
                raise HTTPException(detail='User not found', status_code=status.HTTP_400_BAD_REQUEST)
            
            return user
    
    def get_profile_by_id(self, id: int) -> User:
        with SessionLocal() as session:
            user = session.query(User).filter(User.id == id, User.is_active == True).first()

            if not user:
                raise HTTPException(detail='User not found', status_code=status.HTTP_400_BAD_REQUEST)
        
        return user

    def get_profile(self, username: str) -> User:
        with SessionLocal() as session:
            user: Any = session.query(User).filter(User.username == username).first()
            # tweet = db.query(Tweet).filter(Tweet.user == user.id).count()
            # user = user.dict()
            # user.update(tweets_count=tweet)
            return user

    def deactivate_account(self, request_user: UserAuth) -> Any:
        with SessionLocal() as session:
            user = session.query(User).filter(User.id == request_user['id'], User.is_active == True).first()

            if not user:
                raise HTTPException(status_code=404, detail='User not found')
            user.is_active = False
            session.commit()  
            session.refresh(user)
            return Response(status_code=status.HTTP_204_NO_CONTENT)

    
    # def me_followers(self, db: Session, username: str) -> User:
    #     user = db.query(User).filter(User.username == username, User.is_active == True).first()
    #     user_actions = db.query(Follow).filter(Follow.user_ref == user.id).all()
    #     json = []
    #     for user in user_actions:
    #         data = {}
    #         user = db.query(User).filter(User.id == user.user, User.is_active == True).first()
    #         data['id'] = user.id
    #         data['username'] = user.username
    #         data['email'] = user.email
    #         data['name'] = user.name
    #         json.append(data)
        
    #     return json
    
    # def me_following(self, db: Session, username: str) -> User:
    #     user = db.query(User).filter(User.username == username, User.is_active == True).first()
    #     user_actions = db.query(UserAction).filter(UserAction.user == user.id).all()
    #     json = []
    #     for user in user_actions:
    #         data = {}
    #         user = db.query(User).filter(User.id == user.user_ref, User.is_active == True).first()
    #         data['id'] = user.id
    #         data['username'] = user.username
    #         data['email'] = user.email
    #         data['name'] = user.name
    #         json.append(data)
        
    #     return json


user = UserService()
