from datetime import datetime
from pydantic import BaseModel
from typing import Optional, Union
from schemas.user import UserDisplay, UserInTweet

class TweetBase(BaseModel):
    text: str


class TweetDisplay(BaseModel):
    id: int
    likes: Optional[int]
    retweets: Optional[int]
    text: str
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True


class RetweetBase(BaseModel):
    tweet: int
    comment: Optional[str]


class RetweetDisplay(BaseModel):
    tweet: int
    username: str
    comment: Optional[str]

    class Config:
        orm_mode = True


class LikeBase(BaseModel):
    tweet: int


class LikeDisplay(BaseModel):
    tweet: int
    username: str

    class Config:
        orm_mode = True


class TweetTimeLineResponse(BaseModel):
    id: int
    likes: Optional[int]
    retweets: Optional[int]
    text: str
    user: Union[UserInTweet, None] = None
    created_at: datetime

    class Config:
        orm_mode = True
