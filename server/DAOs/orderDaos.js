const db = require('../models/index');
const today = new Date()
exports.getAllOrder = async () => {
    try {
        const orders = await db.Order.findAll({
            raw: true,
        });
        return orders;
    } catch (error) {
        throw error;
    }
}

exports.getOrder = async (orderId) => {
    try {
        const order = await db.Order.findOne({
            where: { id: orderId },
            raw: true,
        });

        return order || {};
    } catch (error) {
        throw error;
    }
}

exports.createOrder = async (data) => {
    try {
        await db.Order.create({
            order_date: today.getDate(),
            total_price: data.total_price,
            status: data.status,
            user_id: data.user_id,
        });

        return 'create new Order succeed';
    } catch (error) {
        throw error;
    }
}

exports.updateOrderData = async (orderId, data) => {
    try {
        await db.Order.update(
            {            order_date: data.order_date,
                total_price: data.total_price, status: data.status, user_id: data.user_id },
            { where: { id: orderId } }
        );

        return 'update order succeed';
    } catch (error) {
        throw error;
    }
}

exports.deleteOrder = async (orderId) => {
    try {
        await db.Order.destroy({ where: { id: orderId } });

        return 'delete order succeed';
    } catch (error) {
        throw error;
    }
}
