from typing import Optional


def set_value(obj: dict, path: str, new_value: object, force: Optional[bool] = None) -> None:
    """
    Set a value in a nested object.

    Time Complexity: O(n) where n is the length of the path.

    Args:
        obj (Dict): The object to modify.
        path (str): The path to the value to modify.
        new_value (object): The new value to set.
        force (bool, optional): If True, will set the value even if the path does not exist. Defaults to None.
    """

    if not isinstance(obj, dict):
        raise TypeError('Value is not an object.')

    pieces = path.split('.') if isinstance(path, str) else path
    current = obj
    piece = None
    length = len(pieces)

    for index in range(length):
        piece = pieces[index]

        # Create namespace (object) where none exists.
        # If `force === true`, bruteforce the path without throwing errors.
        if (isinstance(current, dict) and piece not in current) or current[piece] is None or (not isinstance(current[piece], dict) and force):
            current[piece] = {}

        if index == (length - 1):
            # Set final value
            current[piece] = new_value
        else:
            # We do not overwrite existing path pieces by default
            if not isinstance(current[piece], dict):

                raise ValueError('Target key "{}" is not suitable for a nested value. (It is in use as non-object. Set `force` to `true` to override.)'.format(piece))

            # Traverse next in path
            current = current[piece]
