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

const getAllPostsFromUser = async (req, res) => {
  const { id: userId } = req.user;
  const posts = await postServices.getAllFromUser(userId);
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postServices.getById(id);
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  const updatedPost = await postServices.update(id, title, content, userId);
  return res.status(200).json(updatedPost);
};

module.exports = {
  createPost,
  getAllPostsFromUser,
  getPostById,
  updatePost,
};
