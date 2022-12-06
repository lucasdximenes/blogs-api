const express = require('express');
const { userMiddlewares, authMiddleware } = require('../middlewares');
const { userControllers } = require('../controllers');

const router = express.Router();

router.get('/', authMiddleware.auth, userControllers.getAllUsers);
router.get('/:id', authMiddleware.auth, userControllers.getUserById);

router.post(
  '/',
  userMiddlewares.validateRegistrationBody,
  userControllers.registerUser,
);

router.delete('/me', authMiddleware.auth, userControllers.deleteUser);

module.exports = router;
