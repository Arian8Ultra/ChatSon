//jwt
const knex = require('../DB/knex');
const jwt = require('jsonwebtoken');
const config = require('../config');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let { encrypt, decrypt } = require('../cipher');

class User {
    constructor(id, username, email, password, token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}

// create user with token check
function CreateUser(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        jwt.verify(req.jwt, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                const User = new User(decoded.id, decoded.username, decoded.email, decoded.password, decoded.token);
                knex('users').insert(User).then(() => {
                    console.log('User created');
                });
                res.status(200).json(User);
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}


// UpdateUser with token check
function UpdateUser(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            knex('users').where({ id: req.user.id }).update
                ({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                }).then(() => {
                    console.log('User updated');
                });
            res.status(200).json({ message: 'User updated' });
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// DeleteUser with token check
function DeleteUser(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            knex('users').where({ id: req.user.id }).del().then(() => {
                console.log('User deleted');
            });
            res.status(200).json({ message: 'User deleted' });
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}

// GetUser with token checkq
function GetUser(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            knex('users').where({ id: req.user.id }).select().then((result) => {
                res.json(result);
            });
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// GetUser with token check by username
function GetUserByUsername(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            knex('users').where({ username: req.user.username }).select().then((result) => {
                res.json(result);
            });
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}



// GetUsers with token check
function GetUsers(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            knex('users').select().then((result) => {
                res.json(result);
            });
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// Generate JWT
function GenerateJWT(User) {
    const token = jwt.sign(User, config.jwtSecret, {
        expiresIn: config.jwtExpiration // in seconds
    });

    return token;
}

// 


//check token
function CheckToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded);
        });
    });
}

//user login with jwt
function Login(req, res, next) {
    const User = {
        username: req.body.username,
        password: (String(req.body.password)),
    };
    knex('users').where({ username: User.username }).select().then((result) => {
        if (result.length > 0) {
            if (result[0].password === User.password) {
                const token = GenerateJWT(result[0]);
                knex('users').where({ username: User.username }).update({ token: token }).then(() => {
                    console.log('User logged in');
                });
                res.status(200).json({ token: token });
            } else {
                res.status(401).json({ message: 'Wrong password or username' });
            }
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    });
}

//user register with jwt and hash password
function Register(req, res, next) {
    // check if request body is empty
    if (req.body.username == "" && req.body.email == "" && req.body.password == "") {
        res.status(400).json({ message: 'Request body is empty' });
    }
    else {

        const User = {
            username: req.body.username,
            email: req.body.email,
            password: (String(req.body.password)),
        };
        knex('users').where({ username: User.username }).select().then((result) => {
            if (result.length > 0) {
                res.status(401).json({ message: 'User already exists' });
            } else {
                knex('users').insert(User).then(() => {
                    console.log('User registered');
                });
                res.status(200).json({ message: 'User registered' });
            }
        });
    }
}


//user auth check with jwt
function AuthCheck(req, res, next) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded;
            res.status(200).json({ message: 'Token still is valid' });
            next();
        }).catch((err) => {
            res.status(401).json({ error: 'Failed to authenticate' });
        });
    } else {
        res.status(401).json({
            error: 'No authorization header was found'
        });
    }
}

// user follow someone by username function with token check
function FollowByUsername(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded.username;
            knex('users').where({ username: req.user }).select().then((result) => {
                if (result.length > 0) {
                    knex('users').where({ username: req.body.username }).select().then((result) => {
                        if (result.length > 0) {
                            knex('users').where({ username: req.user }).update({ following: req.body.username }).then(() => {
                                console.log('User followed');
                            });
                            // adding current user to followers of the user he follows
                            knex('users').where({ username: req.body.username }).update({ followers: req.user }).then(() => {
                                console.log('User followed');
                            });
                            res.status(200).json({ message: 'User followed' });
                        } else {
                            res.status(401).json({ message: 'User not found' });
                        }
                    });
                } else {
                    res.status(401).json({ message: 'User not found' });
                }
            })
        }).catch((err) => {
                res.status(401).json({ error: 'Failed to authenticate' });
            });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// user unfollow someone by username function with token check
function UnfollowByUsername(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded.username
            knex('users').where({ username: req.user }).select().then((result) => {
                if (result.length > 0) {
                    knex('users').where({ username: req.body.username }).select().then((result) => {
                        if (result.length > 0) {
                            knex('users').where({ username: req.user }).update({ following: req.body.username }).then(() => {
                                console.log('User unfollowed');
                            });
                            // removing current user from followers of the user he unfollows
                            knex('users').where({ username: req.body.username }).update({ followers: req.user }).then(() => {
                                console.log('User unfollowed');
                            });
                            res.status(200).json({ message: 'User unfollowed' });
                        } else {
                            res.status(401).json({ message: 'User not found' });
                        }
                    });
                } else {
                    res.status(401).json({ message: 'User not found' });
                }
            })
        }).catch((err) => {
                res.status(401).json({ error: 'Failed to authenticate' });
            });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// get users tweets from tweets table by username with token check
function GetTweetsByUsername(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded.username
            knex('users').where({ username: req.user }).select().then((result) => {
                if (result.length > 0) {
                    knex('tweets').where({ username: req.body.username }).select().then((result) => {
                        if (result.length > 0) {
                            res.status(200).json(result);
                        } else {
                            res.status(401).json({ message: 'User not found' });
                        }
                    });
                } else {
                    res.status(401).json({ message: 'User not found' });
                }
            })
        }).catch((err) => {
                res.status(401).json({ error: 'Failed to authenticate' });
            });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}

// get current user tweets from tweets table with token check
function GetTweets(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded.username
            knex('users').where({ username: req.user }).select().then((result) => {
                if (result.length > 0) {
                    knex('tweets').where({ username: req.user }).select().then((result) => {
                        if (result.length > 0) {
                            res.status(200).json(result);
                        } else {
                            res.status(401).json({ message: 'User not found' });
                        }
                    });
                } else {
                    res.status(401).json({ message: 'User not found' });
                }
            })
        }).catch((err) => {
                res.status(401).json({ error: 'Failed to authenticate' });
            });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}


// get current user
function GetCurrentUser(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        CheckToken(req.jwt).then((decoded) => {
            req.user = decoded.username
            console.log(req.user);
            knex('users').where({ username: req.user }).select().then((result) => {
                if (result.length > 0) {
                    res.status(200).json(result);
                } else {
                    res.status(401).json({ message: 'User not found' });
                }
            })
        }).catch((err) => {
                res.status(401).json({ error: 'Failed to authenticate' });
            });
    } else {
        res.status(401).json({ error: 'Failed to authenticate' });
    }
}





// Export functions
module.exports = {
    CreateUser,
    UpdateUser,
    DeleteUser,
    GetUser,
    GetUserByUsername,
    GetUsers,
    Login,
    Register,
    CheckToken,
    GenerateJWT,
    AuthCheck,
    User,
    FollowByUsername,
    UnfollowByUsername,
    GetCurrentUser
}