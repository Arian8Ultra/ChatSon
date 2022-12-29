// Description: This file contains all the functions related to security
// including encryption and decryption


// aes encryption
export function AES_Encryption(key, message) {
  return CryptoJS.AES.encrypt(message, key);
}
//aes decryption
export function AES_Decryption(key, ciphertext) {
  return CryptoJS.AES.decrypt(ciphertext, key)
}
// aes key generation
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

//rsa key generation
export async function RSA_Key_Gen(privateKey, publicKey) {
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
export async function Exported_RSA_Key_Gen(privateKey, publicKey) {
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

//rsa encryption
export async function RSA_Encryption(publicKey, message) {
  crypto.subtle.encrypt(
    {
      name: "RSA-OAEP"
    },
    publicKey,
    new TextEncoder().encode(message)
  ).then((encrypted) => {
    return encrypted
  }).catch((error) => {
    console.error(error);
  })
}

//rsa decryption
export async function RSA_Decryption(privateKey, ciphertext) {
  crypto.subtle.decrypt(
    {
      name: "RSA-OAEP"
    },
    privateKey,
    ciphertext
  ).then((decrypted) => {
    return decrypted
  }).catch((error) => {
    console.error(error);
  })
}