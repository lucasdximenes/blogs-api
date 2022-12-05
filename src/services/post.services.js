const { Op } = require('sequelize');
const ApiErrors = require('../helpers/apiErrors');
const { Category, BlogPost, PostCategory, sequelize } = require('../models');

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

module.exports = {
  create,
};