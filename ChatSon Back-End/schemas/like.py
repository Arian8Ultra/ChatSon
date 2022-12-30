from pydantic import BaseModel


class LikeResponse(BaseModel):
    tweet_id: int
    user_id: int
    is_active: bool

    class Config:
        orm_mode = True
