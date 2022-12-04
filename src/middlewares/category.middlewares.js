const ApiErrors = require('../helpers/apiErrors');

const validateCreateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new ApiErrors(400, '"name" is required');
  }
  return next();
};

module.exports = {
  validateCreateCategory,
};
