from typing import Optional
from pydantic import BaseModel

class RetweetRequest(BaseModel):
    comment: Optional[str]


class RetweetResponse(BaseModel):
    tweet_id: int
    user_id: int
    is_active: bool
    comment: Optional[str]

    class Config:
        orm_mode = True
