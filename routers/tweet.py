from typing import Any, List
from fastapi import APIRouter, Depends
from authentication.oauth import get_current_user

from schemas.tweet import TweetDisplay, TweetBase, RetweetDisplay, LikeDisplay, TweetTimeLineResponse
from schemas.user import UserAuth

from services.tweet import tweet


router = APIRouter()


@router.post('/', response_model=TweetDisplay)
def create_tweet(request: TweetBase, request_user: UserAuth = Depends(get_current_user)) -> Any:
    return tweet.create(request=request, request_user=request_user)

@router.delete('/{id}', response_model=None)
def delete(id: int, request_user: UserAuth = Depends(get_current_user)) -> Any:
    return tweet.delete(id=id, request_user=request_user)

@router.get('/', response_model=List[TweetTimeLineResponse])
async def get_tweets(request_user: UserAuth = Depends(get_current_user)) -> Any:
    return tweet.get_all(request_user=request_user)
    

@router.get('/{id}', response_model=TweetDisplay)
def get_tweet(id: int) -> Any:
    return tweet.get_tweet_by_id(id=id)


# @router.get('/retweets/{id_tweet}', response_model=List[RetweetDisplay])
# async def get_retweet_users(id_tweet: int, request_user: UserAuth = Depends(get_current_user)) -> Any:
#     with Session(engine) as session:
#         object = retweet.get_retweets_by_tweet(db=session, id=id_tweet, request_user=request_user)
#         return object


@router.get('/profile/{username}', response_model=List[TweetDisplay], 
            dependencies=[Depends(get_current_user)])
def get_tweets_profile(username: str) -> Any:
    tweets = tweet.get_tweets_by_profile(username=username)
    return tweets