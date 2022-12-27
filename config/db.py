# SQLAlchemy
from sqlalchemy import create_engine   # type: ignore
from sqlalchemy import MetaData  # type: ignore

# Local
# from config.settings import DATABASE_URL

engine = create_engine("sqlite:///db.sqlite")

meta = MetaData()

connection = engine.connect()