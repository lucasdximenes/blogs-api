const express = require('express');
const { userMiddlewares } = require('../middlewares');
const { userControllers } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  userMiddlewares.validateRegistrationBody,
  userControllers.registerUser,
);

module.exports = router;
