const express = require('express');
const { authMiddleware, postMiddlewares } = require('../middlewares');
const { postControllers } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  authMiddleware.auth,
  postMiddlewares.validatePostBody,
  postControllers.createPost,
);

module.exports = router;
