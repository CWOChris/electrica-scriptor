const router = require('express').Router();
const postRoutes = require('./postRoutes');

router.get('/', postRoutes.getAllPosts);
router.get('/:id', postRoutes.getPostById);
router.post('/', postRoutes.createPost);
router.put('/:id', postRoutes.updatePost);
router.delete('/:id', postRoutes.deletePost);

module.exports = router;