const { User } = require('../models');
const ApiErrors = require('../helpers/apiErrors');

const verifyEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !user.password || user.password !== password) {
    throw new ApiErrors(400, 'Invalid fields');
  }
  return user;
};

module.exports = {
  verifyEmailAndPassword,
};
