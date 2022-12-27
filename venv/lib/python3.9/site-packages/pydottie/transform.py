from typing import Any
from typing import KeysView
from typing import List
from typing import Dict
from typing import Union
from typing import Optional


def transform(obj: Union[Dict,List], delimiter: Optional[str] = None) -> Union[Dict[str, Any],List]:
    """
    Transform unnested object with .-separated keys into a nested object.

    Time complexity: O(n * b)

    Args:
        obj (Union[Dict,List]): Object to transform.
        delimiter (Optional[str]): Delimiter to use. Defaults to '.'.

    Returns:
        Union[Dict[str, Any],List]: Transformed object.
    """

    if isinstance(obj, list):
        return [transform(item, delimiter) for item in obj]

    delimiter = delimiter or '.'

    pieces = None
    piecesLength = None
    piece = None
    current = None
    transformed: Dict[str, Any] = {}
    keys: KeysView[Any] = obj.keys()

    key: str
    for key in keys:

        if delimiter in key:
            pieces = key.split(delimiter)
            piecesLength = len(pieces)
            current = transformed

            for i in range(piecesLength):
                piece = pieces[i]

                if i != (piecesLength - 1) and piece not in current:
                    current[piece] = {}

                if i == (piecesLength - 1):
                    current[piece] = obj[key]

                current = current[piece]
                if current is None:
                    break

        else:
            transformed[key] = obj[key]

    return transformed
