from typing import Dict
from typing import List
from typing import Optional


def paths(obj: Dict, prefixes: Optional[List[str]] = None) -> List[str]:
    """
    Gets the paths of the given object.

    Time Complexity: O(n * m) where n is the number of keys in the object and m is the number of nested keys.

    Args:
        obj (Dict): The object to get the paths of.
        prefixes (Union[List[str], None]): The prefixes to use.

    Returns:
        List[str]: The paths of the given object.
    """

    output: List[str] = []
    key = None

    prefixes = prefixes or []

    if not isinstance(obj, dict):
        raise TypeError('Paths was called with non-object argument.')

    for key, value in obj.items():

        if isinstance(value, dict) and value != None:
            output = output + paths(value, (prefixes + [key]))
        else:
            output.append('.'.join(prefixes + [key]))

    return output
