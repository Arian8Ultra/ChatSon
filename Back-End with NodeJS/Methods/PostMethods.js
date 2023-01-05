const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');
const prisma = require('../prisma/prisma');
let { encrypt, decrypt } = require('../cipher');


// new post from current user with jwt
exports.newPost = async (req, res) => {

    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }
    const token = req.jwt
    if (req.jwt) {
        jwt.verify(req.jwt, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            else {

                console.log(decoded.username);
                prisma.post.create({
                    data: {
                        username: decoded.username,
                        content: req.body.content,
                        date: new Date()
                    }
                }).then((post) => {
                    res.status(200).json({ post: post });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                });
            }
        });
    }
    else {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    }

}


// get all posts sorted by latest with jwt check
exports.getPosts = async (req, res) => {
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
        prisma.post.findMany({
            orderBy: {
                date: "desc"
            }
        }).then((posts) => {
            res.status(200).json({ posts: posts });
        }).catch((err) => {
            res.status(500).json({ message: err.message });
        });
    });
}

// get post by id with jwt check
exports.getPost = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            prisma.post.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((post) => {
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                res.status(200).json({ post: post });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        });

    }
}


// get posts by username with jwt check sorted by latest
exports.getPostsByUsername = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            prisma.post.findMany({
                where: {
                    username: req.params.username
                },
                orderBy: {
                    date: "desc"
                }
            }).then((posts) => {
                if (!posts) {
                    return res.status(404).json({ message: "No posts found." });
                }
                res.status(200).json({ posts: posts });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        });

    }
}


// get current user posts with jwt check sorted by latest
exports.getCurrentUserPosts = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            prisma.post.findMany({
                where: {
                    username: decoded.username
                },
                orderBy: {
                    date: "desc"
                }
            }).then((posts) => {
                if (!posts) {
                    return res.status(404).json({ message: "No posts found." });
                }
                res.status(200).json({ posts: posts });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        });

    }
}

// delete post by id with jwt check
exports.deletePost = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if(err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            prisma.post.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((post) => {
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                res.status(200).json({ message: "Post deleted." });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        });
    }
}


// update post by id with jwt check
exports.updatePost = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            prisma.post.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    title: req.body.title,
                    content: req.body.content
                }
            }).then((post) => {
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                res.status(200).json({ message: "Post updated." });
            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });
        });

    }
}


// like post by id with jwt check and adding currennt user username to likedBy array
exports.likePost = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            // select post by id
            prisma.post.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((post) => {
                const likedByArray = JSON.parse(post.likedBy);
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                // check if user already liked the post
                if (likedByArray.includes(decoded.username)) {
                    return res.status(400).json({ message: "You already liked this post." });
                }
                // add user to likedBy array
                likedByArray.push(decoded.username);
                // update post
                prisma.post.update({
                    where: {
                        id: parseInt(req.params.id)
                    },
                    data: {
                        likedBy: JSON.stringify(likedByArray)
                    }
                }).then((post) => {
                    if (!post) {
                        return res.status(404).json({ message: "No post found." });
                    }
                    res.status(200).json({ message: "Post liked." });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                }
                );

            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });

        });
    }
}

// unlike post by id with jwt check and removing currennt user username from likedBy array  
exports.unlikePost = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            // select post by id
            prisma.post.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((post) => {
                const likedByArray = JSON.parse(post.likedBy);
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                // check if user already liked the post
                if (!likedByArray.includes(decoded.username)) {
                    return res.status(400).json({ message: "You didn't like this post." });
                }
                // remove user from likedBy array
                likedByArray.splice(likedByArray.indexOf(decoded.username), 1);
                // update post
                prisma.post.update({
                    where: {
                        id: parseInt(req.params.id)
                    },
                    data: {
                        likedBy: JSON.stringify(likedByArray)
                    }
                }).then((post) => {
                    if (!post) {
                        return res.status(404).json({ message: "No post found." });
                    }
                    res.status(200).json({ message: "Post unliked." });
                }).catch((err) => {
                    res.status(500).json({ message: err.message });
                }
                );

            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });

        });
    }
}


// check if user liked the post
exports.checkIfLiked = async (req, res) => {
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
    else {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            // select post by id
            prisma.post.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((post) => {
                const likedByArray = JSON.parse(post.likedBy);
                if (!post) {
                    return res.status(404).json({ message: "No post found." });
                }
                // check if user already liked the post
                if (likedByArray.includes(decoded.username)) {
                    return res.status(200).json({ message: "You liked this post." });
                }
                else {
                    return res.status(200).json({ message: "You didn't like this post." });
                }

            }).catch((err) => {
                res.status(500).json({ message: err.message });
            });

        });
    }
}
