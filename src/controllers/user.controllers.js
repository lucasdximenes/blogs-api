const jwt = require('jsonwebtoken');
const { userServices } = require('../services');

const { JWT_SECRET } = process.env;

const registerUser = async (req, res) => {
  const newUser = await userServices.create(req.body);
  delete newUser.dataValues.password;

  const token = jwt.sign({ data: newUser }, JWT_SECRET, { expiresIn: '7d' });

  res.status(201).json({ token });
};

module.exports = {
  registerUser,
};
