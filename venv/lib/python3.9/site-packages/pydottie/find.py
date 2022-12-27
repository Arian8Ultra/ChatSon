from typing import Any, Dict

# Utilities
from .get import get


def find(path: str, obj: Dict) -> Any:
    """
    Finds a value in a dictionary.

    Time complexity: O(n)

    Args:
        path: The path to the value.
        obj: The dictionary to search.

    Returns:
        Any: The value found.
    """

    return get(obj, path)
