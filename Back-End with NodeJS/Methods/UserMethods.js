const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');
const prisma = require('../prisma/prisma');
let { encrypt, decrypt } = require('../cipher');


//user register with jwt and hash password function
exports.register = async (req, res) => {
    let User = {
        username: req.body.username,
        email: req.body.email,
        password: String(req.body.password),
    };
    encrypt(User.password).then((hash) => {
        //check if user already exists
        User.password = hash;
        prisma.user.findUnique({
            where: {
                username: User.username
            }
        }).then((user) => {
            if (user) {
                res.status(500).json({ message: "user already exists" });
            }
            else {
                const User ={
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                }
                prisma.user.create({
                    data: User
                }).then((user) => {
                    const token = jwt.sign(user, config.jwtSecret, {
                        expiresIn: 86400 //24 hours
                    });
                    res.status(200).json({ auth: true, token: token });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                });
            }
        });
    });
}

//user login with jwt and hash password function
exports.login = async (req, res) => {
    let User = {
        username: req.body.username,
        password: String(req.body.password),
    };
    prisma.user.findUnique({
        where: {
            username: User.username
        }
    }).then((user) => {
        decrypt(user.password).then((result) => {
            if (result == User.password) {
                const token = jwt.sign( user, config.jwtSecret, {
                    expiresIn: 86400 //24 hours
                });
                res.status(200).json({ auth: true, token: token });
            } else {
                res.status(500).json({ message: "password incorrect" });
            }
        });
    }).catch((err) => {
        res.status(500).json({ message: 'user can not be found' });
    });
}

//user auth check with jwt
exports.authCheck = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        res.status(200).json({ auth: true, message: 'Token authenticated' });
    });

}


//user delete with jwt
exports.deleteUser = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.delete({
            where: {
                id: decoded.id
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            res.status(200).json({ message: "User deleted" });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}


//user update with jwt
exports.updateUser = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.update({
            where: {
                id: decoded.id
            },
            data: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            res.status(200).json({ message: "User updated" });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}


//user get all with jwt
exports.getAllUsers = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findMany().then((users) => {
            if (!users) {
                return res.status(404).json({ message: "No users found." });
            }
            res.status(200).json(users);
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}

// get user by username with jwt
exports.getUserByUsername = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                username: req.query.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            res.status(200).json(user);
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}


//get current user with jwt
exports.getCurrentUser = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided. current' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findFirst({
            where: {
                username: decoded.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            res.status(200).json(user);
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}


//get user by id with jwt
exports.getUserById = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            res.status(200).json(user);
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}


// user follow with jwt and username
exports.followUser = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        //select user to follow
        prisma.user.findUnique({
            where: {
                username: req.params.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            //select current user with jwt
            prisma.user.findUnique({
                where: {
                    id: decoded.id
                }
            }).then((currentUser) => {
                const UserFollowingArray = JSON.parse(currentUser.following)
                const UserFollowersArray = JSON.parse(user.followers)
                if (UserFollowingArray.includes(user.username)) {
                    return res.status(400).json({ message: "You already follow this user." });
                }
                //add user to current user following array
                UserFollowingArray.push(user.username)
                //add current user to user followers array
                UserFollowersArray.push(currentUser.username)
                //update current user following array
                prisma.user.update({
                    where: {
                        id: decoded.id
                    },
                    data: {
                        following: JSON.stringify(UserFollowingArray)
                    }
                }).then((updatedUser) => {
                    //update user followers array
                    prisma.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            followers: JSON.stringify(UserFollowersArray)
                        }
                    }).then((updatedUser) => {
                        res.status(200).json({ message: "User followed successfully." });
                    }).catch((err) => {
                        res.status(500).json({ message: err.message });
                    });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}


// user unfollow with jwt and username
exports.unfollowUser = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }

        prisma.user.findUnique({
            where: {
                username: req.params.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            //select current user with jwt
            prisma.user.findUnique({
                where: {
                    id: decoded.id
                }
            }).then((currentUser) => {
                const UserFollowingArray = JSON.parse(currentUser.following)
                const UserFollowersArray = JSON.parse(user.followers)
                if (!UserFollowingArray.includes(user.username)) {
                    return res.status(400).json({ message: "You don't follow this user." });
                }
                //remove user from current user following array
                UserFollowingArray.splice(UserFollowingArray.indexOf(user.username), 1)
                //remove current user from user followers array
                UserFollowersArray.splice(UserFollowersArray.indexOf(currentUser.username), 1)
                //update current user following array
                prisma.user.update({
                    where: {
                        id: decoded.id
                    },
                    data: {
                        following: JSON.stringify(UserFollowingArray)
                    }
                }).then((updatedUser) => {
                    //update user followers array
                    prisma.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            followers: JSON.stringify(UserFollowersArray)
                        }
                    }).then((updatedUser) => {
                        res.status(200).json({ message: "User unfollowed successfully." });
                    }).catch((err) => {
                        res.status(500).json({ message: err.message });
                    });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}


// check if user is following another user
exports.checkIfFollowing = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                username: req.params.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            //select current user with jwt
            prisma.user.findUnique({
                where: {
                    id: decoded.id
                }
            }).then((currentUser) => {
                const UserFollowingArray = JSON.parse(currentUser.following)
                if (UserFollowingArray.includes(user.username)) {
                    return res.status(200).json({ message: "You follow this user." });
                }
                else {
                    return res.status(200).json({ message: "You don't follow this user." });
                }
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}


// get user followers with jwt check
exports.getUserFollowers = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                username: req.params.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            const UserFollowersArray = JSON.parse(user.followers)
            res.status(200).json({ message: "User followers fetched successfully.", followers: UserFollowersArray });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}

// get user following with jwt check
exports.getUserFollowing = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                username: req.params.username
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            const UserFollowingArray = JSON.parse(user.following)
            res.status(200).json({ message: "User following fetched successfully.", following: UserFollowingArray });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}


// get current user followers
exports.getCurrentUserFollowers = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            const UserFollowersArray = JSON.parse(user.followers)
            res.status(200).json({ message: "User followers fetched successfully.", followers: UserFollowersArray });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}


// get current user following
exports.getCurrentUserFollowing = async (req, res) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
        prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        }).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "No user found." });
            }
            const UserFollowingArray = JSON.parse(user.following)
            res.status(200).json({ message: "User following fetched successfully.", following: UserFollowingArray });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        }
        );
    });
}