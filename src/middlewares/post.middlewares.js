const ApiErrors = require('../helpers/apiErrors');
const {
  validateCreatePostBody,
  validateUpdatePostBody,
} = require('./validations');

const validatePostBody = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw new ApiErrors(400, 'Some required fields are missing');
  }
  validateCreatePostBody(req.body);
  return next();
};

const validatePostUpdateBody = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw new ApiErrors(400, 'Some required fields are missing');
  }
  validateUpdatePostBody(req.body);
  return next();
};

module.exports = {
  validatePostBody,
  validateUpdatePostBody,
  validatePostUpdateBody,
};
