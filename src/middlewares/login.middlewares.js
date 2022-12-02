const { validateLoginBody } = require('./validations');
const ApiErrors = require('../helpers/apiErrors');

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiErrors(400, 'Some required fields are missing');
  }
  validateLoginBody(req.body);
  return next();
};

module.exports = {
  validateLogin,
};
