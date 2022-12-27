from typing import Dict
from typing import Optional


def flatten(obj: Dict, seperator: Optional[str] = None) -> dict:
    """Flatten a dictionary.

    Time complexity: O(n * m) where n is the number of keys in the dictionary and m is the number of nested keys.

    Args:
        obj (Dict): The dictionary to flatten.
        seperator (Union[str, None]): The seperator to use.

    Returns:
        Dict: The flattened dictionary.
    """

    if not isinstance(seperator, str):
        seperator = '.'

    flattened = {}
    current = None
    nested = None

    for key in obj:
        current = obj[key]
        if isinstance(current, dict):
            nested = flatten(current, seperator)

            for _key in nested:
                flattened[key + seperator + _key] = nested[_key]
        else:
            flattened[key] = current

    return flattened
