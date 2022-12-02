module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
      },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };

  return PostCategory;
};
