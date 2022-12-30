from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from fastapi.encoders import jsonable_encoder
from fastapi import Depends, HTTPException, status
from typing import Optional
from jose import jwt, JWTError

from core.config import settings
from services.user import user


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def create_access_token(request: dict, expires_delta: Optional[timedelta] = None):
    encode = request.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    encode.update({"expire": jsonable_encoder(expire)})

    encoded_jwt = jwt.encode(encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials.",
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=settings.ALGORITHM)
        username = payload.get("username")
        if not username:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Username not found"
            )
    except JWTError:
        raise credentials_exception

    current_user = user.get_profile_by_username(username)
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
    }
