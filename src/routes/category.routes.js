const express = require('express');
const { categoryControllers } = require('../controllers');
const { authMiddleware, categoryMiddlewares } = require('../middlewares');

const router = express.Router();

router.get('/', authMiddleware.auth, categoryControllers.getAllCategories);

router.post(
  '/',
  authMiddleware.auth,
  categoryMiddlewares.validateCreateCategory,
  categoryControllers.createCategory,
);

module.exports = router;
