
export function AES_Encryption(key, message) {
  return CryptoJS.AES.encrypt(message, key);
}
export function AES_Decryption(key, ciphertext) {
  return CryptoJS.AES.decrypt(ciphertext, key)
}
export async function AES_Key_Gen(key) {


  crypto.subtle.generateKey(
    {
      name: "AES-CBC",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  ).then((generatedKey) => {
    key(generatedKey)
    return (generatedKey)
  }).catch((error) => {
    console.error(error);
  })
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
    privateKey(keyPair.privateKey)
    publicKey(keyPair.publicKey)
    return (keyPair)
  }).catch((error) => {
    console.error(error);
  })
}
export function Exported_RSA_Key_Gen(privateKey, publicKey) {
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

    crypto.subtle.exportKey('jwk', keyPair.privateKey).then((exportedKey) => {
      privateKey(exportedKey);
    }).catch(e => {
      console.error(e);
    })
    crypto.subtle.exportKey('jwk', keyPair.publicKey).then((exportedKey) => {
      publicKey(exportedKey);

    }).catch(e => {
      console.error(e);
    })
    return (keyPair)
  }).catch((error) => {
    console.error(error);
  })
}