const db = require('../models/index');

exports.createProduct = async (data) => {
    try {
        await db.Product.create({
            name: data.name,
            gender: data.gender,
            type: data.type,
            category_id: data.category_id,
        });
        return 'Tạo sản phẩm mới thành công';
    } catch (e) {
        throw e;
    }
};

exports.getAllProduct = async () => {
    try {
        let products = await db.Product.findAll({
            raw: true,
        });
        return products;
    } catch (e) {
        throw e;
    }
};

exports.getProduct = async (productId) => {
    try {
        let product = await db.Product.findOne({
            where: { id: productId },
            raw: true,
        });

        return product || {};
    } catch (e) {
        throw e;
    }
};
exports.getProductByGender = async (gender) => {
    try {
        let product = await db.Product.findOne({
            where: {gender: gender},
        });

        return product || {};
    } catch (e) {
        throw e;
    }
};

exports.updateProductData = async (productId, data) => {
    try {
        await db.Product.update(
            {
                name: data.name,
                gender: data.gender,
                type: data.type,
                imageCover: data.imageCover,
                sizeCover: data.sizeCover,
                colorCover: data.colorCover,
                status: data.status,
                CategoryId: data.CategoryId,
            },
            {
                where: {
                    id: productId,
                },
            }
        );
        return 'Cập nhật thông tin sản phẩm thành công';
    } catch (e) {
        throw e;
    }
};

exports.deleteProduct = async (productId) => {
    try {
        await db.Product.destroy({
            where: {
                id: productId,
            },
        });
        return 'Xóa sản phẩm thành công';
    } catch (e) {
        throw e;
    }
};



