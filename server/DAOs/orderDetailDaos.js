const db = require('../models/index');

exports.getAllOrderDetail = async () => {
    try {
        let orderDetails = await db.OrderDetail.findAll({
            raw: true,
        });
        return orderDetails;
    } catch (e) {
        throw e;
    }
};

exports.getOrderDetail = async (orderDetailID) => {
    try {
        let orderDetail = await db.OrderDetail.findOne({
            where: { id: orderDetailID },
            raw: true,
        });

        if (orderDetail) {
            return orderDetail;
        } else {
            return {};
        }
    } catch (e) {
        throw e;
    }
};

exports.createOrderDetail = async (data) => {
    try {
        await db.OrderDetail.create({
            order_id: data.order_id,
            product_id: data.product_id,
            price: data.price,  
            quantity: data.quantity 
        }, {
            where: {
                orderId: db.Order.id,
                productID: db.Product.id
            }
        });
        return 'create new Order detail succeed';
    } catch (e) {
        throw e;
    }
};

exports.updateOrderDetailData = async (orderDetailID, data) => {
    try {
        await db.OrderDetail.update({
            order_id: data.order_id,
            product_id: data.product_id,
            price: data.price,
            quantity: data.quantity
        }, {
            where: {
                id: orderDetailID
            }
        });
        return 'update order detail succeed';
    } catch (e) {
        throw e;
    }
};

exports.deleteOrderDetail = async (orderDetailID) => {
    try {
        await db.OrderDetail.destroy({
            where: {
                id: orderDetailID
            }
        });
        return 'delete order detail succeed';
    } catch (e) {
        throw e;
    }
};
