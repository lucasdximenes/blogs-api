const { Op } = require('sequelize');
const ApiErrors = require('../helpers/apiErrors');
const {
  User,
  Category,
  BlogPost,
  PostCategory,
  sequelize,
} = require('../models');

const verifyIfAllCategoriesExist = async (categoryIds) => {
  const categories = await Category.findAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });

  if (categories.length !== categoryIds.length) {
    throw new ApiErrors(400, 'one or more "categoryIds" not found');
  }
};

const create = async (title, content, categoryIds, userId) => {
  await verifyIfAllCategoriesExist(categoryIds);
  try {
    const newPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost.create(
        { title, content, userId },
        { transaction: t },
      );

      const postCategories = categoryIds.map((categoryId) => ({
        postId: post.id,
        categoryId,
      }));

      await PostCategory.bulkCreate(postCategories, { transaction: t });

      return post;
    });

    return newPost;
  } catch (error) {
    throw new ApiErrors(500, 'Error trying to create a post');
  }
};

const getAllFromUser = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    throw new ApiErrors(404, 'Post does not exist');
  }

  return post;
};

module.exports = {
  create,
  getAllFromUser,
  getById,
};
