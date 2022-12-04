const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryServices.create(name);

  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};
