
const express = require('express');
// import methods from '../methods/userMethods';
const { register, login, deleteUser, updateUser, getAllUsers, getCurrentUser, getUserById, getUserByUsername, authCheck, followUser, unfollowUser, checkIfFollowing, getCurrentUserFollowers, getCurrentUserFollowing, getUserFollowers, getUserFollowing } = require('../Methods/UserMethods');

const router = express.Router();



router.get('/', getAllUsers);
router.get('/id', getUserById);
router.put('/', updateUser);
router.delete('/', deleteUser);
router.post('/', register);
router.get('/current', getCurrentUser);
router.post('/login', login);
router.get('/auth', authCheck);
router.get('/username', getUserByUsername);
router.get('/follow/:username', followUser);
router.get('/unfollow/:username', unfollowUser);
router.get('/checkiffollowing/:username', checkIfFollowing);
router.get('/currentuser/followers', getCurrentUserFollowers);
router.get('/currentuser/following', getCurrentUserFollowing);
router.get('/followers/:username', getUserFollowers);
router.get('/following/:username', getUserFollowing);


module.exports = router;