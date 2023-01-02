const { encodeBase64, decodeBase64 } = require("bcryptjs");
const  crypto =  require("crypto");
const config = require("./config");
const algorithm = "aes-256-cbc";

// generate 16 bytes of random data
const initVector = config.AES_initVector;

// protected data
// secret key generate 32 bytes of random data
let Securitykey = config.AES_Key;
// the cipher function



async function  encrypt(message) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(Securitykey, 'base64'), Buffer.from(initVector, 'base64'));
    let encrypted = cipher.update(message, "utf8", "hex");
    encrypted += cipher.final("hex");
    cipher.closed = true;
    return encrypted;
}
;

async function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(Securitykey, 'base64'), Buffer.from(initVector, 'base64'));
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}
;


// export encrypt and decrypt functions
module.exports = {
    encrypt,
    decrypt,
};

