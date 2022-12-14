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

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  await postServices.remove(id, userId);
  return res.status(204).end();
};

const searchPost = async (req, res) => {
  const { q: query } = req.query;
  const posts = await postServices.search(query);
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPostsFromUser,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};
