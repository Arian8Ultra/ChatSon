from pydantic import BaseModel
from typing import Optional


class UserActionBase(BaseModel):
    user_ref: int
    is_blocked: Optional[bool]
    is_muted: Optional[bool]
    is_followed: Optional[bool]