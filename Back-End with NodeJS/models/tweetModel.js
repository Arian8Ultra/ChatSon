const knex = require('../DB/knex');
const jwt = require('jsonwebtoken');
const config = require('../config');
const express = require('express');
const router = express.Router()

// tweet object with username as foreign key
class Tweet {
    constructor(id, username, content, date) {
        this.id = id;
        this.username = username;
        this.content = content;
        this.date = date;
    }
}

// CreateTweet and check jwt token in header and aading tweet to users tweets
function CreateTweet(req, res) {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] === 'JWT') {
            req.jwt = authorization[1];
        }
    }

    if (req.jwt) {
        jwt.verify(req.jwt, config.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Unauthorized Token' });
            } else {
                const Tweet = { username: decoded.username, content: req.body.content, date: new Date().getHours() + ':' + new Date().getMinutes() + ' ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() };
                knex('tweets').insert(Tweet).then(() => {
                    console.log('Test : ' + decoded.username);
                    // select user tweets and add new tweet to it
                    knex('users').select('tweets').where({ username: decoded.username }).then((result) => {
                        let tweets = []
                        tweets = result[0].tweets;
                        if (tweets == null) { tweets = []; }
                        else {
                            tweets = JSON.parse(tweets);
                            console.log('Tweets : ' + tweets);
                        }
                        tweets.push(Tweet);
                        tweets = JSON.stringify(tweets);
                        knex('users').update({ tweets: tweets }).where({ username: decoded.username }).then(() => {
                            res.status(200).json(Tweet);
                        });
                    })
                });

                // res.status(200).json(Tweet);
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// GetTweets with token check
function GetTweets(req, res) {
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
                knex('tweets').select().then((result) => {
                    res.json(result);
                });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// DeleteTweet
function DeleteTweet(req, res) {
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
                knex('tweets').where({ id: req.params.id }).del().then(() => {
                    console.log('Tweet deleted');
                });
                res.status(200).json({ message: 'Tweet deleted' });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// UpdateTweet
function UpdateTweet(req, res) {
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
                knex('tweets').where({ id: req.params.id }).update({ content: req.body.content }).then(() => {
                    console.log('Tweet updated');
                });
                res.status(200).json({ message: 'Tweet updated' });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// GetTweet
function GetTweet(req, res) {
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
                knex('tweets').where({ id: req.params.id }).select().then((result) => {
                    res.json(result);
                });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}


//GetTweet by username
function GetTweetByUsername(req, res) {
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
                knex('tweets').where({ username: req.params.username }).select().then((result) => {
                    res.json(result);
                });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

//LikeTweet by adding jwt username to likes array
function LikeTweet(req, res) {
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
                // adding username to likes array by selecting likes column and adding username to it
                knex('tweets').where({ id: req.params.id }).select('likes').then((result) => {
                    const likes = result[0].likes;

                    if (likes == null) { likes = []; }
                    else { likes = JSON.parse(likes); }
                    if (likes.includes(decoded.username)) {
                        res.status(401).json({ message: 'Already liked' });
                    }
                    else {
                        likes.push(decoded.username);
                        likes = JSON.stringify(likes);
                        knex('tweets').where({ id: req.params.id }).update({ likes: likes }).then(() => {
                            console.log('Tweet liked');
                        });

                        // adding 1 to like count of the tweet
                        knex('tweets').where({ id: req.params.id }).select('like_count').then((result) => {
                            const like_count = result[0].like_count;
                            if(like_count == null) { like_count = 0; }
                            knex('tweets').where({ id: req.params.id }).update({ like_count: like_count + 1 }).then(() => {
                                console.log('Like count updated');
                            });
                            res.status(200).json({ message: 'Tweet liked' });
                        });
                    }

                });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}



//UnlikeTweet by removing jwt username from likes array
function UnlikeTweet(req, res) {
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
                // removing username from likes array and decresing likes count
                knex('tweets').where({ id: req.params.id }).update({ likes: knex.raw('array_remove(likes, ?)', decoded.username) }).then(() => {
                    knex('tweets').where({ id: req.params.id }).update({ likes: knex.raw('likes - 1') }).then(() => {
                        console.log('Tweet unliked');
                    });
                });

                res.status(200).json({ message: 'Tweet unliked' });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}


// get current user tweets
function GetCurentUserTweets(req, res) {
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
                knex('tweets').where({ username: decoded.username }).select().then((result) => {
                    res.json(result);
                });
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });

    }
}




module.exports = {
    CreateTweet,
    GetTweets,
    DeleteTweet,
    UpdateTweet,
    GetTweet,
    GetTweetByUsername,
    Tweet,
    LikeTweet,
    UnlikeTweet,
    GetCurentUserTweets,
};