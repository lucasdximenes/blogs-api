const bcrypt = require('bcrypt');
const { User } = require('../models');
const ApiErrors = require('../helpers/apiErrors');

const saltRounds = 10;

const create = async (user) => {
  const { email } = user;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    throw new ApiErrors(409, 'User already registered');
  }

  const { password } = user;
  const hash = await bcrypt.hash(password, saltRounds);
  const hashedUser = { ...user, password: hash };

  const newUser = await User.create(hashedUser);
  return newUser;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    throw new ApiErrors(404, 'User does not exist');
  }
  return user;
};

const remove = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  remove,
};
