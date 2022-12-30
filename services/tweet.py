from typing import List, Any
from fastapi import Response, HTTPException
from starlette import status


from models import Tweet, User
from database import SessionLocal
from models.user import Follow
from services.user import user as user_service
from schemas.user import UserAuth
from schemas.tweet import TweetBase


class TweetService:
    def create(self, request: TweetBase, request_user: UserAuth) -> Tweet:
        with SessionLocal() as session:
            user = user_service.get_profile_by_id(request_user['id'])
            if user:
                tweet = Tweet(text=request.text, user=user)
                session.add(tweet)
                session.commit()
                session.refresh(tweet)
                return tweet
        
            raise HTTPException(detail='User not exists', status_code=404)

    def delete(self, id: int, request_user: UserAuth) -> Any:
        with SessionLocal() as session:
            user = user_service.get_profile_by_id(request_user['id'])
            tweet = session.query(Tweet).filter(Tweet.id == id).first()
            
            if user.id == tweet.user.id:
                tweet.is_active = False
                session.commit()  
                session.refresh(tweet)
                return Response(status_code=status.HTTP_204_NO_CONTENT)

            return Response(status_code=status.HTTP_404_NOT_FOUND)
    
    def get_all(self, request_user: UserAuth) -> List[Tweet]:
        tweets_list = []
        with SessionLocal() as session:
            user = session.query(User).filter(User.username == request_user['username'], User.is_active == True).first()
            tweets_list = session.query(Tweet).filter(Tweet.user == user, Tweet.is_active == True).all()
            followings = session.query(Follow).filter(Follow.user == user).all()
            for following in followings:
                tweets = session.query(Tweet).filter(Tweet.user == following.user_ref, Tweet.is_active == True).all()
                if tweets:
                    tweets_list += tweets
        
        if tweets_list:
            tweets_list.sort(key=lambda x: x.created_at, reverse=True)

        return tweets_list

    def get_tweet_by_id(self, id: int) -> Tweet:
        with SessionLocal() as session:
            tweet = session.query(Tweet).filter(Tweet.id == id, Tweet.is_active == True).first()
            if not tweet: 
                raise HTTPException(status_code=404, detail='Tweet not found')
            return tweet

    def get_tweets_by_profile(self, username: str) -> List:
        tweets = []
        with SessionLocal() as session:
            user = session.query(User).filter(User.username == username).first()
            if user:
                tweets = session.query(Tweet).filter(Tweet.user_id == user.id, Tweet.is_active == True).all()
        return tweets


tweet = TweetService()
