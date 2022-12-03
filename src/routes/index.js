const express = require('express');

const router = express.Router();
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');

router.use('/login', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;
