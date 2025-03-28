const express = require('express');
const router = express.Router();
const { getPosts, getPost, addPost, putPost, patchPost, deletePost } = require('../controllers/posts');

router.get('/', getPosts);

router.get('/:slug', getPost);


router.post('/', addPost);

router.put('/:slug', putPost);

router.patch('/:slug', patchPost);

router.delete('/:slug', deletePost);


module.exports = router;