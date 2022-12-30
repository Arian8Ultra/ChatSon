from fastapi import APIRouter, Depends
from authentication.oauth import get_current_user
from routers import follow, profile, authentication, tweet, like, retweet, user


api_router = APIRouter()
api_router.include_router(profile.router, prefix='/profiles', tags=['profile'], dependencies=[Depends(get_current_user)])
api_router.include_router(retweet.router, prefix='/retweets', tags=['retweet'],dependencies=[Depends(get_current_user)])
api_router.include_router(follow.router, prefix='/follow', tags=['follow'], dependencies=[Depends(get_current_user)])
api_router.include_router(tweet.router, prefix='/tweets', tags=['tweet'], dependencies=[Depends(get_current_user)])
api_router.include_router(like.router, prefix='/likes', tags=['like'], dependencies=[Depends(get_current_user)])
api_router.include_router(user.router, prefix='/users', tags=['user'])
api_router.include_router(authentication.router, prefix='/login', tags=['login'])
