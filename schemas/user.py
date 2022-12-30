from datetime import date, datetime
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, Union


class UserBase(BaseModel):
    name: str = Field()
    # birthday: date
    username: str = Field(min_length=3)
    email:  EmailStr
    password: str = Field(min_length=5)


class UserDisplay(BaseModel):
    username: Optional[str]
    id: int
    email: Optional[str]

    class Config:
        orm_mode = True


class UserProfileDisplay(BaseModel):
    username: Optional[str]
    email: Optional[str]
    # birthday: Optional[date]
    name: Optional[str]
    created_at: Optional[datetime]
    tweets_count: Optional[int]

    class Config:
        orm_mode = True


class UserProfileResponse(BaseModel):
    id: int
    username: str
    name: str
    description: Optional[str]

    class Config:
        orm_mode = True


class UserAuth(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        orm_mode = True


class UserInTweet(BaseModel):
    id: int
    username: str
    name: str

    class Config:
        orm_mode = True
    
