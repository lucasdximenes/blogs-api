const jwt = require('jsonwebtoken');
const ApiError = require('../helpers/apiErrors');

const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ApiError(401, 'Token not found');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.data;
    next();
  } catch (err) {
    throw new ApiError(401, 'Expired or invalid token');
  }
};

module.exports = {
  auth,
};
