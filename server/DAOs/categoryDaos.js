const db = require('../models/index');

exports.getAllCategory = async () => {
    try {
        const categories = await db.Category.findAll({
            raw: true,
        });
        return categories;
    } catch (error) {
        throw error;
    }
};

// Assume db is the Sequelize instance and Category is the Sequelize model for the "Categories" table.

exports.getCategory = async (categoryId) => {
    try {
      const category = await db.Category.findByPk(categoryId, { raw: true });
  
      return category || {}; // Return the category object if found, otherwise return an empty object
    } catch (error) {
      throw error;
    }
  };
  

exports.createCategory = async (data) => {
    try {
        await db.Category.create({
            name: data.name,
        });
        return 'Tạo mới danh mục thành công';
    } catch (error) {
        throw error;
    }
};

exports.updateCategoryData = async (categoryId, data) => {
    try {
        await db.Category.update(
            {
                name: data.name,
            },
            {
                where: {
                    id: categoryId,
                },
            }
        );
        return 'Cập nhật danh mục thành công';
    } catch (error) {
        throw error;
    }
};

exports.deleteCategory = async (categoryId) => {
    try {
        await db.Category.destroy({
            where: {
                id: categoryId,
            },
        });
        return 'Xóa danh mục thành công';
    } catch (error) {
        throw error;
    }
};
