
from typing import Any, Dict, List

from sqlmodel import Session
from models.tweet import Like, Retweet, Tweet
from models.user import User


def tweet_count(tweet: Tweet, db: Session) -> Dict:
    tweet = tweet.dict()
    likes = db.query(Like).filter(Like.tweet == tweet['id'], Like.is_active == True).count()
    retweets = db.query(Retweet).filter(Retweet.tweet == tweet['id'], Retweet.is_active == True).count()
    tweet.update(likes=likes, retweets=retweets)

    return tweet


# def get_tweet_actions(actions: Like | Retweet, db: Session) -> List:
#     json = []
#     for action in actions:
#         action = action.dict()
#         user = db.query(User).filter(User.id == action['user']).first()
#         action.update(username=user.username)
#         json.append(action)
#     return json
