const {
  loginBodySchema,
  registerBodySchema,
  createPostBodySchema,
  updatePostBodySchema,
} = require('./schema');
const ApiErrors = require('../../helpers/apiErrors');

const validateLoginBody = (body) => {
  const { error } = loginBodySchema.validate(body);
  if (error) {
    throw new ApiErrors(400, error.message);
  }
};

const validateRegisterBody = (body) => {
  const { error } = registerBodySchema.validate(body);
  if (error) {
    throw new ApiErrors(400, error.message);
  }
};

const validateCreatePostBody = (body) => {
  const { error } = createPostBodySchema.validate(body);
  if (error) {
    throw new ApiErrors(400, error.message);
  }
};

const validateUpdatePostBody = (body) => {
  const { error } = updatePostBodySchema.validate(body);
  if (error) {
    throw new ApiErrors(400, error.message);
  }
};

module.exports = {
  validateLoginBody,
  validateRegisterBody,
  validateCreatePostBody,
  validateUpdatePostBody,
};
