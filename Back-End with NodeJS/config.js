const crypto = require("crypto");


// jwt secret
const jwtSecret = 'OxzQgy8aZHkFYSlTloi2O7orQ5n/mi0nU9zTkkwvpk4BOFPRBKKP9gz4IIZs1uQeJHCFLtaMdKwKVN+xHkBwVsTx0eg+4msY5cSIlzvdQPFdi4nSGAkVR1jw2rj1YqCd8nAkbRlLzDZre3ITUU0S6z0t0VeAWHqDrgkzT/JIcAxdRLPJpGhTFEnakknMzsQJ3l8J4FC3e0X7de6GJUyH7EPPkRtmLmzQaqh73nn7tGG5OakjVHQeTtTs2vkrPUlqsOvznfOGgTHpJG6gHXSVybPdnqz3PGdSB27r+ndThxdDSYkH9Lxkd6n/BRcsEWaFIxKa7ATJkcpXVXl6I/0fXw==';
// jwt expiration in seconds
const jwtExpiration = 3600;

const AES_Key = "9LN9IXJCpkDSM4S5UtVj5zPkqyHymeQF71m/ZJVxLc0=";
const AES_initVector = "Ok9f6ftJbDwq+PAGTqT0UQ=="

// AES key
// export config object
module.exports = {
    jwtSecret,
    jwtExpiration,
    AES_Key,
    AES_initVector
};