const express = require('express');
// import methods from '../methods/postMethods';
const { newPost,checkIfLiked,deletePost,getCurrentUserPosts,getPost,getPosts,getPostsByUsername,likePost,unlikePost,updatePost } = require('../Methods/PostMethods');

const router = express.Router();


router.post('/', newPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/username/:username', getPostsByUsername);
router.get('/currentuser', getCurrentUserPosts);
router.post('/like/:id', likePost);
router.post('/unlike/:id', unlikePost);
router.get('/checkifliked/:id', checkIfLiked);


module.exports = router;