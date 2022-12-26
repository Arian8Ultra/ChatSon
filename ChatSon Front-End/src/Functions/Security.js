
export function AES_Encryption(key, message) {
  return CryptoJS.AES.encrypt(message, key);
}


export function RSA_Key_Gen(privateKey, publicKey) {
  crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  ).then((keyPair) => {
    console.log(keyPair.privateKey);
    console.log(keyPair.publicKey);
    privateKey(crypto.subtle.exportKey('jwk',keyPair.privateKey));
    publicKey(crypto.subtle.exportKey('jwk',keyPair.privateKey));
    return (keyPair.privateKey)
  }).catch((error) => {
    console.error(error);
  })
}
