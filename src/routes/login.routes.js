const express = require('express');
const { loginController } = require('../controllers');
const { loginMiddlewares } = require('../middlewares');

const router = express.Router();

router.post('/', loginMiddlewares.validateLogin, loginController.login);

module.exports = router;
