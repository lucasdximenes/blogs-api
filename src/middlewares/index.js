const loginMiddlewares = require('./login.middlewares');
const errorMiddleware = require('./error.middleware');
const userMiddlewares = require('./user.middlewares');

module.exports = {
  loginMiddlewares,
  errorMiddleware,
  userMiddlewares,
};
