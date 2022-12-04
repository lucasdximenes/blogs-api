const express = require('express');

const router = express.Router();
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');
const categoryRoutes = require('./category.routes');

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
