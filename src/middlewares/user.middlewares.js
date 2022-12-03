const { validateRegisterBody } = require('./validations');

const validateRegistrationBody = (req, _res, next) => {
  validateRegisterBody(req.body);
  next();
};

module.exports = {
  validateRegistrationBody,
};
