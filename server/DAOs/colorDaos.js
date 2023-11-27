const db = require('../models/index');

// Hàm lấy tất cả thông tin màu sắc
exports.getAllColors = async () => {
    try {
      const colors = await db.Color.findAll();
      return colors;
    } catch (error) {
      throw error;
    }
  };  

// Hàm lấy thông tin màu sắc bằng Id
exports.getColorById = async (id) => {
  try {
    const color = await db.Color.findByPk(id);
    return color;
  } catch (error) {
    throw error;
  }
};


// Hàm xóa màu sắc
exports.deleteColor = async (id) => {
    try {
      const deletedColor = await db.Color.destroy({
        where: { productDetail_id: id }, // Điều kiện WHERE để xác định bản ghi cần xóa
        returning: true,   // Trả về thông tin của kích thước đã bị xóa
      });
  
      // Trả về thông tin của màu sắc đã bị xóa (không cần thiết, chỉ là ví dụ)
      return deletedColor;
    } catch (error) {
      throw error;
    }
};

// Hàm thêm màu sắc nếu chưa tồn tại
exports.addColorIfNotExisted = async (pr_id, color, code) => {
  try {
    const existingColor = await db.Color.findOne({
      where: {
        name: color,
        code_color: code,
        productDetail_id: pr_id,
      },
    });

    if (!existingColor) {
      const newColor = await db.Color.create({
        name: color,         
        code_color: code,    
        productDetail_id: pr_id,
      });

      return newColor;
    }

    return existingColor;
  } catch (error) {
    throw error;
  }
};

  
  