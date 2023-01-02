const express = require('express');
const { CreateTweet, GetTweet, GetTweets, UpdateTweet, DeleteTweet, GetTweetByUsername,GetCurentUserTweets,LikeTweet,UnlikeTweet } = require('../models/tweetModel');
const router = express.Router();

router.post('/', CreateTweet);
router.get('/', GetTweets);
router.get('/:id', GetTweet);
router.put('/:id', UpdateTweet);
router.delete('/:id', DeleteTweet);
router.get('/username/:username', GetTweetByUsername);
router.get('/currentuser', GetCurentUserTweets);
router.post('/like', LikeTweet);
router.post('/unlike', UnlikeTweet);

module.exports = router;