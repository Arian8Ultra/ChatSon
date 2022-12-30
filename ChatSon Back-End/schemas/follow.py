from pydantic import BaseModel


class FollowRequest(BaseModel):
    user_ref: int


class FollowResponse(BaseModel):
    user_ref_id: int
    user_id: int

    class Config:
        orm_mode = True
