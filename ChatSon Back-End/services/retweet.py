from fastapi import status, HTTPException

from database import SessionLocal
from models import Retweet
from schemas.retweet import RetweetRequest
from schemas.user import UserAuth

from services.user import user as user_service


class RetweetService:
    def create(self, tweet_id: int, request: RetweetRequest, request_user: UserAuth) -> Retweet:
        with SessionLocal() as session:
            user = user_service.get_profile_by_id(request_user['id'])
            
            retweet = session.query(Retweet).filter(Retweet.tweet_id == tweet_id, Retweet.user_id == user.id).first()

            if retweet:
                if not retweet.is_active:
                    retweet.is_active = True
                    retweet.comment = request.comment
                else:
                    retweet.is_active = False
                session.commit()
                session.refresh(retweet)
                return retweet

            if user:
                retweet = Retweet(user_id=user.id, tweet_id=tweet_id, comment=request.comment)

                session.add(retweet)
                session.commit()
                session.refresh(retweet)
                return retweet
        
            raise HTTPException(detail='User not exists', status_code=status.HTTP_404_NOT_FOUND)


retweet = RetweetService()
