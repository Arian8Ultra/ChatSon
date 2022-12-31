# i want a class that inherits from the rsa and aes classes


from rsa import RSA
from Crypto.Cipher import AES


class Security(RSA, AES):
    def __init__(self):
        RSA.__init__(self)
        AES.__init__(self)

    def RSA_encrypt(self, message):
        return RSA.encrypt(self, message)

    def set_public_key(self, public_key):
        RSA.set_public_key(self, public_key)

    def set_private_key(self, private_key):
        RSA.set_private_key(self, private_key)

    def RSA_decrypt(self, message):
        return RSA.decrypt(self, message)

    def AES_encrypt(self, message):
        return AES.encrypt(self, message)

    def AES_decrypt(self, message):
        return AES.decrypt(self, message)

    def set_aes_key(self, aes_key):
        AES.set_aes_key(self, aes_key)

    def set_aes_iv(self, aes_iv):
        AES.set_aes_iv(self, aes_iv)

    def get_aes_key(self):
        return AES.get_aes_key(self)
security = Security()