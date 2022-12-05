const ApiErrors = require('../helpers/apiErrors');
const { validateCreatePostBody } = require('./validations');

const validatePostBody = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new ApiErrors(400, 'Some required fields are missing');
  }
  validateCreatePostBody(req.body);
  return next();
};

module.exports = {
  validatePostBody,
};
