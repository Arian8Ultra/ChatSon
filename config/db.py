# SQLAlchemy
from sqlalchemy import text
from sqlalchemy.dialects import mysql
from sqlalchemy import create_engine   # type: ignore
from sqlalchemy import MetaData  # type: ignore

# Local
# from config.settings import DATABASE_URL
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, TIMESTAMP, Date
from sqlalchemy.orm import mapper, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
# import relation
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, backref

BASE = declarative_base()

# user is a table in database


class User(BASE):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    token = Column(String(255), nullable=False, default='')
    username = Column(String(255), nullable=False)
    lastLogin = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, nullable=True)
    updated_at = Column(TIMESTAMP, nullable=True)

    def __repr__(self):
        return "<User (username='% s', token='% s')>" % (self.username, self.token)

    def __init__(self,id, username,   lastLogin, token='token', created_at=None, updated_at=None):
        self.username = username
        self.token = token
        self.lastLogin = lastLogin
        self.created_at = created_at
        self.updated_at = updated_at


class AnonymoseUser(User):
    __tablename__ = 'anonymoseUser'
    # id must be same as User.id
    id = Column(Integer, ForeignKey('users.id'), primary_key=True)

    def __repr__(self):
        return "<AnonymoseUser (username = '% s', token = '% s')>" % (self.username, self.token)

    def __init__(self, username, token, lastLogin):
        super().__init__(username,  lastLogin, token)
        self.id = id


class NormalUser(User):
    __tablename__ = 'normalUser'
    # id must be same as User.id

    id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    name = Column(String(255), nullable=False)
    surname = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    phone = Column(String(255), nullable=True)
    address = Column(String(255), nullable=True)
    accessLevel = Column(Integer, nullable=False)
    # like = relationship("like", backref="normalUser")
    # follow = relationship("follow", backref="normalUser")
    # chat = relationship("chats", backref="normalUser")

    def __repr__(self):
        return "<NormalUser (username = '% s', token = '% s')>" % (self.username, self.token)

    def __init__(self,id, username, token, lastLogin, password, name, surname, email, accessLevel='1', phone='', address='',created_at='', updated_at=''):
        super().__init__(username, token, lastLogin)
        self.name = name
        self.surname = surname
        self.email = email
        self.password = password
        self.phone = phone
        self.address = address
        self.accessLevel = accessLevel
        self.created_at = created_at
        self.updated_at = updated_at



class Chat(BASE):
    __tablename__ = 'chats'
    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(String(255), nullable=False)
    date = Column(TIMESTAMP, nullable=False)
    media = Column(String(255), nullable=True)
    user_id = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
    # like = relationship("Like", backref="chats")
    created_at = Column(TIMESTAMP, nullable=True)
    updated_at = Column(TIMESTAMP, nullable=True)

    def __repr__(self):
        return "<Chat (message = '% s', date = '% s')>" % (self.message, self.date)

    def __init__(self, message, date, media, user_id, created_at='', updated_at=''):
        self.message = message
        self.date = date
        self.media = media
        self.user_id = user_id
        self.created_at = created_at
        self.updated_at = updated_at


# class Follow(BASE):
#     __tablename__ = 'follow'
#     # relation between user and user
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     user = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
#     follower = Column(Integer, ForeignKey('normalUser.id'), nullable=False)

#     def __repr__(self):
#         return

#     def __init__(self, user, follower):
#         self.user = user
#         self.follower = follower


# class Like(BASE):
#     __tablename__ = 'like'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     # relation between user and chat
#     user = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
#     chat = Column(Integer, ForeignKey('chats.id'), nullable=False)
#     date = Column(TIMESTAMP, nullable=False)

#     def __repr__(self):
#         return

#     def __init__(self, user, chat, date):
#         self.user = user
#         self.chat = chat
#         self.date = date


# class Media(BASE):
#     __tablename__ = 'media'
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     # relation between user and chat
#     chat = Column(Integer, ForeignKey('chat.id'), nullable=False)
#     media = Column(String(255), nullable=False)

#     def __repr__(self):
#         return

#     def __init__(self, chat, media):
#         self.chat = chat
#         self.media = media


engine = create_engine("sqlite:///db.sqlite",
                       connect_args={"check_same_thread": False})

BASE.metadata.create_all(engine)

meta = MetaData()

connection = engine.connect()
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# i want my session as mysql code