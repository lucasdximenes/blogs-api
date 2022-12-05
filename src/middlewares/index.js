const loginMiddlewares = require('./login.middlewares');
const errorMiddleware = require('./error.middleware');
const userMiddlewares = require('./user.middlewares');
const authMiddleware = require('./auth.middleware');
const categoryMiddlewares = require('./category.middlewares');
const postMiddlewares = require('./post.middlewares');

module.exports = {
  loginMiddlewares,
  errorMiddleware,
  userMiddlewares,
  authMiddleware,
  categoryMiddlewares,
  postMiddlewares,
};
