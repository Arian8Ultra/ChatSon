from typing import Dict, Any
from sqlalchemy.ext.declarative import as_declarative, declared_attr

class_registry: Dict = {}


@as_declarative(class_registry=class_registry)
class Base:
    id: Any
    __name__: str

    @declared_attr
    def __tablename__(cls) -> str:
        return cls.__name__.lower()