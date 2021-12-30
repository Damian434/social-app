const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getOnePost);
router.post('/', postController.createPost);
router.delete('/', postController.deleteAllPosts);

module.exports = router;