const { User } = require('../models');
const ApiErrors = require('../helpers/apiErrors');

const create = async (user) => {
  const { email } = user;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    throw new ApiErrors(409, 'User already registered');
  }
  const newUser = await User.create(user);
  return newUser;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

module.exports = {
  create,
  getAll,
};
