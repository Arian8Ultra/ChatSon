const express = require('express');
// import methods from '../methods/postMethods';
const { newPost,checkIfLiked,deletePost,getCurrentUserPosts,getPost,getPosts,getPostsByUsername,likePost,unlikePost,updatePost,getPostsPagination,getPostsByLikes } = require('../Methods/PostMethods');

const router = express.Router();


router.post('/', newPost);
router.get('/', getPosts);
router.get('/id', getPost);
router.put('/', updatePost);
router.delete('/', deletePost);
router.get('/username/:username', getPostsByUsername);
router.get('/current', getCurrentUserPosts);
router.post('/like/:id', likePost);
router.post('/unlike/:id', unlikePost);
router.get('/checkifliked/:id', checkIfLiked);
router.get('/pagination', getPostsPagination);
router.get('/likes', getPostsByLikes);

module.exports = router;