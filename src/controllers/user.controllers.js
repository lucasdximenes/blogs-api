const jwt = require('jsonwebtoken');
const { userServices } = require('../services');

const { JWT_SECRET } = process.env;

const registerUser = async (req, res) => {
  const newUser = await userServices.create(req.body);
  delete newUser.dataValues.password;

  const token = jwt.sign({ data: newUser }, JWT_SECRET, { expiresIn: '7d' });

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await userServices.getAll();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getById(id);

  return res.status(200).json(user);
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
};
