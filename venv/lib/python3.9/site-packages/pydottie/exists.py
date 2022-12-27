from typing import Dict

# Utilities
from .get import get


def exists(obj: Dict, path: str) -> bool:
    """
    Check if a value exists in a dictionary.

    Caution: If the value is None this function will return False even if the key exists.

    Time complexity: O(n)

    Args:
        obj: The dictionary to check.
        path: The path to the value.

    Returns:
        bool: True if the value exists, False otherwise.
    """

    return get(obj, path) is not None
