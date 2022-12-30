

from models.user import UserAction


def verify_status_profile(user_action: UserAction):
    if user_action:
        if user_action.is_blocked:
            return False
    
    return True