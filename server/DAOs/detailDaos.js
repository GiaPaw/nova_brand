const db = require('../models/index');

exports.getAllDetail = async () => {
    try {
        const details = await db.ProductDetail.findAll({
            attributes: [
                'id',
                'name',
                'price',
                'description',
                'quantity',
                'createdAt',
                'updatedAt',
                'product_id',
            ],
            include: [
                {
                    model: db.Product,
                    attributes: ['name','gender'],
                },
                {
                    model: db.Size,
                    attributes: ['name'],
                },
                {
                    model: db.Image,
                    attributes: ['name'],
                },
                {
                    model: db.Color,
                    attributes: ['name', 'code_color'],
                },
            ],
        });

        const organizedDetails = details.map(detail => {
            const sizes = detail.Sizes.map(size => size.name);
            const images = detail.Images.map(image => image.name);
            const colors = detail.Colors.map(color => ({ color: color.name, color_code: color.code_color }));

            return {
                id: detail.id,
                name: detail.name,
                price: detail.price,
                product_name: detail.Product.name,
                product_gender: detail.Product.gender,
                description: detail.description,
                sizes,
                images,
                colors,
                quantity: detail.quantity,
                createdAt: detail.createdAt,
                updatedAt: detail.updatedAt,
            };
        });

        return organizedDetails;
    } catch (error) {
        throw error;
    }
};

exports.getDetail = async (productDetailId) => {
    try {
        const detail = await db.ProductDetail.findByPk(productDetailId,{
            attributes: [
                'id',
                'name',
                'price',
                'description',
                'quantity',
                'createdAt',
                'updatedAt',
                'product_id',
            ],
            include: [
                {
                    model: db.Product,
                    attributes: ['name','gender'],
                },
                {
                    model: db.Size,
                    attributes: ['name'],
                },
                {
                    model: db.Image,
                    attributes: ['name'],
                },
                {
                    model: db.Color,
                    attributes: ['name','code_color'],
                },
            ],
        });

        if (!detail) {
            return null; // Trả về null nếu không tìm thấy chi tiết sản phẩm
        }

        const sizes = detail.Sizes.map(size => size.name);
        const images = detail.Images.map(image => image.name);
        const colors = detail.Colors.map(color => ({color:color.name,color_code:color.code_color}));

        const organizedDetail = {
            id: detail.id,
            name: detail.name,
            price: detail.price,
            product_name: detail.Product.name,
            product_gender: detail.Product.gender,
            description: detail.description,
            sizes,
            images,
            colors,
            quantity: detail.quantity,
            createdAt: detail.createdAt,
            updatedAt: detail.updatedAt,
        };

        return organizedDetail;
    } catch (error) {
        throw error;
    }
};

exports.getDetailByName = async (productName) => {
    try {
      const detail = await db.ProductDetail.findOne({
        where: { name: productName },
        attributes: [
                'id',
                'name',
                'price',
                'description',
                'quantity',
                'createdAt',
                'updatedAt',
                'product_id',
            ],
            include: [
                {
                    model: db.Product,
                    attributes: ['name'],
                },
                {
                    model: db.Size,
                    attributes: ['name'],
                },
                {
                    model: db.Image,
                    attributes: ['name'],
                },
                {
                    model: db.Color,
                    attributes: ['name','code_color'],
                },
            ],
        });

        if (!detail) {
            return null; // Trả về null nếu không tìm thấy chi tiết sản phẩm
        }

        const sizes = detail.Sizes.map(size => size.name);
        const images = detail.Images.map(image => image.name);
        const colors = detail.Colors.map(color => ({color:color.name,color_code:color.code_color}));

        const organizedDetail = {
            id: detail.id,
                name: detail.name,
                price: detail.price,
                product_name: detail.Product.name,
                product_gender: detail.Product.gender,
                description: detail.description,
                sizes,
                images,
                colors,
                quantity: detail.quantity,
                createdAt: detail.createdAt,
                updatedAt: detail.updatedAt,
        };

        return organizedDetail;
    } catch (error) {
        throw error;
    }
};

exports.createDetail = async (data) => {
    try {
        await db.ProductDetail.create({
            name: data.name,
            price: data.price,
            description: data.description,
            quantity: data.quantity,
            product_id: data.product_id, 
        });
        return 'Tạo mới chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}

exports.updateDetailData = async (productDetailId, data) => {
    try {
        await db.ProductDetail.update(
            {
                name: data.name,
                price: data.price,
                description: data.description,
                quantity: data.quantity,
            },
            {
                where: {
                    id: productDetailId,
                },
            }
        );
        return 'Cập nhật chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}

exports.deleteDetail = async (productDetailId) => {
    try {
        await db.ProductDetail.destroy({
            where: {
                id: productDetailId,
            },
        });
        return 'Xóa chi tiết sản phẩm thành công';
    } catch (error) {
        throw error;
    }
}
