const { postServices } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;
  const newPost = await postServices.create(
    title,
    content,
    categoryIds,
    userId,
  );
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};
