const express = require('express');
const router = express.Router();
const postsData = require('../utils/posts');
const { getPosts, getPost, addPost, putPost, patchPost,  } = require('../controllers/posts');

router.get('/', getPosts(_, res));

router.get('/:slug', getPost(req, res));


router.post('/', addPost(req, res));

router.put('/:slug', putPost(req, res));

router.patch('/:slug', patchPost(req, res));

router.delete('/:slug', deletePost(req, res));


module.exports = router;