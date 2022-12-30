from datetime import datetime

# FastAPI
from fastapi import APIRouter
from fastapi import status
from fastapi import Body
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError

# Database
from config.db import connection

# Models
from config.db import User
from config.db import NormalUser

# Schemas
from schemas.user import CreateUser
from schemas.user import CreateNormalUser
from schemas.user import UserOut
from schemas.auth import LoginRequest
from schemas.auth import LoginReponse
from schemas.auth import BaseJWTRefreshToken
from schemas.auth import JWTAccessToken

# Utils
from utils.passwords import hash_password
from utils.passwords import check_password
from utils.jsonwebtoken import create_credentials
from utils.jsonwebtoken import create_access_token
from utils.jsonwebtoken import verify_token
from utils.user import get_fullname
from config.db import Session
from uuid import uuid4
import random

router = APIRouter()


@router.post('/signup/anonymous',
             response_model=LoginReponse,
             status_code=status.HTTP_201_CREATED,
             summary='Sign up',
             tags=['Auth', 'Users'])
def signupAnonymous(user: CreateUser = Body(...)):
    """Sign up route.

    This path operation registers a new user in the app.

    Parameters:
    - Request body parameters:
        - user: **UserRegister**

    Returns a json object with the information of the registered user and its credentials.
    - user: **UserOut**
    - access_token: **str**
    - access_token_expiration: **int**
    - refresh_token: **str**
    - refresh_token_expiration: **int**
    """
    print(62, '-----------------')
    print(user)
    user_dict = user.dict()
    user_dict['id'] = str(uuid4())
    # last login must be year-month-day
    user_dict['lastLogin'] = datetime.now().strftime('%Y-%m-%d')
    user_dict['username'] = 'anonymous' + str(random.randint(100000, 999999))
    print(user_dict)

    try:
        session = Session()
        # if username is exist in database raise error
        if session.query(User).filter(User.username == user_dict['username']).first():
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail='Username already registered.')
        session.add(User(**user_dict))
        session.commit()

    except IntegrityError as e:
        str_error = str(e)
        if 'Duplicate entry' in str_error and 'users.email' in str_error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail='Email already registered.') from e

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='Internal server error.') from e
    response = {
        'user': user_dict,
    }

    user_dict['lastLogin'] = "2022-12-29"
    user_dict['username'] = str(user_dict['username'])

    response.update(create_credentials(response['user']))
    print('\033[1;31;40m', response, '\033[0m')
    return response
# normal signup


@router.post('/signup/normal',
             response_model=LoginReponse,
             status_code=status.HTTP_201_CREATED,
             summary='Sign up',
             tags=['Auth', 'Users'])
def signupNormal(user: CreateNormalUser = Body(...)):
    """Sign up route.

    This path operation registers a new user in the app.

    Parameters:
    - Request body parameters:
        - NormalUser: **UserRegister**

    Returns a json object with the information of the registered user and its credentials.
    - user: **UserOut**
    - access_token: **str**
    - access_token_expiration: **int**
    - refresh_token: **str**
    - refresh_token_expiration: **int**
    """
    user_dict = user.dict()
    user_dict['id'] = str(uuid4())
    user_dict['lastLogin'] = datetime.now().strftime('%Y-%m-%d')
    user_dict['username'] = str(user_dict['username'])
    user_dict['name'] = str(user_dict['name'])
    user_dict['surname'] = str(user_dict['surname'])
    user_dict['email'] = str(user_dict['email'])
    user_dict['phone'] = str(user_dict['phone'])
    user_dict['address'] = str(user_dict['address'])
    user_dict['accessLevel'] = int(user_dict['accessLevel'])
    print(user_dict)
    user_dict['password'] = hash_password(user_dict['password'])
    try:
        session = Session()
        if session.query(User).filter(User.username == user_dict['username']).first():
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail='Username already registered.')
        id = user_dict['id']
        lastLogin = user_dict['lastLogin']
        username = user_dict['username']
        token = 'token'
        user_dict['token'] = token
        session.add(User(id=id, lastLogin=lastLogin,
                    username=username, token=token))
        session.add(NormalUser(**user_dict))
        session.commit()
    except IntegrityError as e:
        str_error = str(e)
        if 'Duplicate entry' in str_error and 'users.email' in str_error:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail='Email already registered.') from e

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail='Internal server error.') from e
    response = {
        'user': user_dict,
    }
    user_dict['created_at'] = datetime.now()
    user_dict['updated_at'] = datetime.now()
    response.update(create_credentials(response['user']))
    print('\033[1;31;40m', response, '\033[0m')
    return response


@router.post('/login',
             response_model=LoginReponse,
             status_code=status.HTTP_200_OK,
             summary='Login',
             tags=['Auth', 'Users'])
def login(user: LoginRequest = Body(...)):
    """Login route.

    This operation path allows a user to login in the app.

    Parameters:
    - Request body parameters:
        - user: **LoginRequest**

    Returns a json object with the information of the logged user.
    - user: **UserOut**
    - access_token: **str**
    - access_token_expiration: **int**
    - refresh_token: **str**
    - refresh_token_expiration: **int**
    """
    session = Session()
    registed_user = session.query(User).filter(User.username == user.username).update(
        {User.lastLogin: datetime.now().strftime('%Y-%m-%d')})
    if registed_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail='User not found')

    password_match = check_password(user.password, registed_user.password)

    if not password_match:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Invalid credentials')

    response = {
        'user': UserOut(**registed_user),
    }
    response.update(create_credentials(response['user']))

    return response


@router.post('/refresh',
             response_model=JWTAccessToken,
             status_code=status.HTTP_200_OK,
             summary='Refresh token',
             tags=['Auth', 'Users'])
def refresh_token(refresh_token: BaseJWTRefreshToken = Body(...)):
    """Refresh token route.

    This operation path allows a user to refresh the access token.

    Parameters:
    - Request body parameters:
        - refresh_token: **BaseJWTRefreshToken**

    Returns a json object with the new access token information.
    - access_token: **str**
    - access_token_expiration: **int**
    """

    decoded_token = verify_token(refresh_token.refresh_token)

    base_exception = HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                   detail='Invalid token')

    if decoded_token is None:
        raise base_exception

    session = Session()
    user = session.query(User).filter_by(id=decoded_token['sub']).first()

    if user is None:
        raise base_exception

    token, expiration = create_access_token({
        'sub': user.id,
        'email': user.email,
        'name': get_fullname(user),
    })

    response = {
        'access_token': token,
        'access_token_expiration': expiration,
    }

    return response
