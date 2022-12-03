const loginMiddlewares = require('./login.middlewares');
const errorMiddleware = require('./error.middleware');
const userMiddlewares = require('./user.middlewares');
const authMiddleware = require('./auth.middleware');

module.exports = {
  loginMiddlewares,
  errorMiddleware,
  userMiddlewares,
  authMiddleware,
};
