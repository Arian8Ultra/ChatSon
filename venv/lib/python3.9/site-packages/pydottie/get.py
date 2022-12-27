from typing import Any
from typing import Dict
from typing import Union


def get(obj: Dict, path: str, default: Any = None) -> Any:
    """
    Traverse object according to path, return value if found, else default.

    Time complexity: O(n)

    Args:
        obj: Object to traverse.
        path: Path to traverse.
        default: Default value to return if path not found.

    Returns:
        Any: Value at path if found, else default.
    """

    if obj is None or path is None:
        return default

    names = None

    if isinstance(path, str):
        names = path.split('.')
    elif isinstance(path, list):
        names = path
    else:
        raise TypeError('Path must be str or list')

    current: Union[Dict[str, Any], None] = obj
    for name in names:

        if isinstance(current, dict) and name in current:
            current = current[name]
        else:
            current = None

        if current is None:
            break

    return current if current is not None else default
