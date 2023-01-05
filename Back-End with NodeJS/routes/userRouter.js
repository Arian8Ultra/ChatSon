
const express = require('express');
// import methods from '../methods/userMethods';
const { register, login, logout, deleteUser,updateUser,getAllUsers,getCurrentUser,getUserById,getUserByUsername,authCheck, followUser, unfollowUser,checkIfFollowing,getCurrentUserFollowers,getCurrentUserFollowing,getUserFollowers,getUserFollowing } = require('../Methods/UserMethods');

const router = express.Router();



router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/', register);
router.post('/login', login);
router.post('/register', register);
router.get('/auth', authCheck);
router.get('/currentuser', getCurrentUser);
router.get('/username/:username', getUserByUsername);
router.get('/logout', logout);
router.get('/follow/:username', followUser);
router.get('/unfollow/:username', unfollowUser);
router.get('/checkiffollowing/:username', checkIfFollowing);
router.get('/currentuser/followers', getCurrentUserFollowers);
router.get('/currentuser/following', getCurrentUserFollowing);
router.get('/followers/:username', getUserFollowers);
router.get('/following/:username', getUserFollowing);

module.exports = router;