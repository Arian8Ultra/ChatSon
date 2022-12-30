from datetime import date
from typing import Optional

# Pydantic
from typing import Optional
from pydantic import BaseModel
from pydantic import Field
from pydantic import EmailStr

# Mixins
from mixins.models import IDMixin
from mixins.models import TimestampMixin


class PasswordMixin(BaseModel):
    password: str = Field(...,
                          min_length=8,
                          max_length=255,
                          example='password',)

class BaseUser(BaseModel):
    # username: str = Field(...,
    #                       min_length=3,
    #                       max_length=255,
    #                       example='username',)
    # lastLogin: Optional[date] = None
    pass

class UserOut(IDMixin, TimestampMixin, BaseUser):
    username: str = Field(...,
                            min_length=3,
                            max_length=255,
                            example='username',)
    lastLogin: Optional[date] = None
    pass

class User(PasswordMixin, UserOut):
    pass
# anonymous user

class AnonymouseUserOut(IDMixin, TimestampMixin, BaseUser):
    pass

class NormalUserOut(IDMixin, TimestampMixin, BaseUser):
    name: str = Field(...,
                      min_length=3,
                      max_length=255,
                      example='name',)
    surname: str = Field(...,
                         min_length=3,
                         max_length=255,
                         example='surname',)
    email: EmailStr = Field(...,
                            # min_length=3,
                            # max_length=255,
                            example='email',)
    phone: Optional[str] = Field(None,
                                 min_length=3,
                                 max_length=255,
                                 example='phone',)
    address: Optional[str] = Field(None,
                                   min_length=3,
                                   max_length=255,
                                   example='address',)
    accessLevel: int = Field(...,
                             ge=0,
                             le=2,
                             example=0,)
    password: str = Field(...,
                            min_length=8,
                            max_length=255,
                            example='password',)
    lastLogin: Optional[date] = None

class NormalUser(PasswordMixin, NormalUserOut):
    pass

class UserOut(IDMixin, TimestampMixin, BaseUser):
    token: str = Field(...,
                          min_length=3, 
                            max_length=255,
                            example='token',)
    username: str = Field(...,
                            min_length=3,
                            max_length=255,
                            example='username',)
    pass


class User(PasswordMixin, UserOut):
    pass


class CreateUser(BaseUser):
    pass
class CreateNormalUser(NormalUserOut):
    pass
