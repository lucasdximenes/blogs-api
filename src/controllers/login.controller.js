const jwt = require('jsonwebtoken');
const { loginServices } = require('../services');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginServices.verifyEmailAndPassword(email, password);
  delete user.password;

  const token = jwt.sign({ data: user }, JWT_SECRET, { expiresIn: '7d' });

  res.status(200).json({ token });
};

module.exports = {
  login,
};
