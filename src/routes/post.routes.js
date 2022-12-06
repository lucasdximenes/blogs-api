const express = require('express');
const { authMiddleware, postMiddlewares } = require('../middlewares');
const { postControllers } = require('../controllers');

const router = express.Router();

router.get('/search', authMiddleware.auth, postControllers.searchPost);
router.get('/', authMiddleware.auth, postControllers.getAllPostsFromUser);
router.get('/:id', authMiddleware.auth, postControllers.getPostById);

router.post(
  '/',
  authMiddleware.auth,
  postMiddlewares.validatePostBody,
  postControllers.createPost,
);

router.put(
  '/:id',
  authMiddleware.auth,
  postMiddlewares.validatePostUpdateBody,
  postControllers.updatePost,
);

router.delete('/:id', authMiddleware.auth, postControllers.deletePost);

module.exports = router;
