from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, TIMESTAMP, Date
from sqlalchemy.orm import mapper, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
# import relation
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, backref

BASE = declarative_base()

class User(BASE):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    token = Column(String(255), nullable=False)
    username = Column(String(255), nullable=False)
    lastLogin = Column(TIMESTAMP, nullable=False)

class AnonymoseUser(User):
    __tablename__ = 'anonymoseUser'
    id = Column(Integer, primary_key=True, autoincrement=True)

class NormalUser(User):
    __tablename__ = 'normalUser'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    surname = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    phone = Column(String(255), nullable=True)
    address = Column(String(255), nullable=True)
    accessLevel = Column(Integer, nullable=False)
    like = relationship("Like", backref="normalUser")
    follow = relationship("Follow", backref="normalUser")
    chat = relationship("Chat", backref="normalUser")

    
class Chat(BASE):
    __tablename__ = 'chat'
    id = Column(Integer, primary_key=True, autoincrement=True)
    message = Column(String(255), nullable=False)
    date = Column(TIMESTAMP, nullable=False)
    media = Column(String(255), nullable=True)
    user = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
    like = relationship("Like", backref="chat")


class Follow(BASE):
    __tablename__ = 'follow'
    # relation between user and user
    user = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
    follower = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
    
class Like(BASE):
    __tablename__ = 'like'
    # relation between user and chat
    user = Column(Integer, ForeignKey('normalUser.id'), nullable=False)
    chat = Column(Integer, ForeignKey('chat.id'), nullable=False)
    date = Column(TIMESTAMP, nullable=False)
    
engine = create_engine("sqlite:///db.sqlite",connect_args={"check_same_thread": False})

BASE.metadata.create_all(engine)
