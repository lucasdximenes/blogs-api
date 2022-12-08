const bcrypt = require('bcrypt');
const { User } = require('../models');
const ApiErrors = require('../helpers/apiErrors');

const verifyEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new ApiErrors(401, 'Incorrect email or password');
  }

  return user;
};

module.exports = {
  verifyEmailAndPassword,
};
