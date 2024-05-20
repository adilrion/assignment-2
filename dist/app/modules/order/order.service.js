"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = exports.deleteOrder = exports.updateOrder = exports.getOrder = exports.getOrders = exports.addOrder = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
// order service for added new order
async function addOrder(order) {
    try {
        const product = await product_model_1.ProductModel.findById(order.productId);
        if (!product) {
            const errorResponse = {
                success: false,
                message: 'Product not found',
            };
            throw errorResponse;
        }
        if (order.quantity > product?.inventory?.quantity) {
            const errorResponse = {
                success: false,
                message: 'Insufficient quantity available in inventory',
            };
            throw errorResponse;
        }
        // Update inventory quantity and inStock status
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product?.inventory?.quantity > 0;
        await product.save();
        const newOrder = await order_model_1.OrderModel.create(order);
        return newOrder;
    }
    catch (error) {
        throw {
            success: false,
            message: 'Error in adding order',
        };
    }
}
exports.addOrder = addOrder;
// order service for getting all orders
async function getOrders(email) {
    try {
        const pipeline = [
            ...(email ? [{ $match: { email } }] : []),
            {
                $project: {
                    email: 1,
                    price: 1,
                    quantity: 1,
                    product: 1,
                },
            },
        ];
        const orders = await order_model_1.OrderModel.aggregate(pipeline).exec();
        if (orders.length <= 0) {
            const errorResponse = {
                success: false,
                message: 'Orders not found',
            };
            throw errorResponse;
        }
        return orders;
    }
    catch (error) {
        // @ts-ignore
        throw {
            success: false,
            message: 'Error in getting orders',
        };
    }
}
exports.getOrders = getOrders;
// order service for getting single order
async function getOrder(id) {
    try {
        const order = await order_model_1.OrderModel.findById(id);
        return order;
    }
    catch (error) {
        const errorResponse = {
            success: false,
            message: 'Order not found',
        };
        // @ts-ignore
        throw errorResponse;
    }
}
exports.getOrder = getOrder;
// order service for updating single order
async function updateOrder(id, order) {
    try {
        const updatedOrder = await order_model_1.OrderModel.findByIdAndUpdate(id, order, {
            new: true,
        });
        return updatedOrder;
    }
    catch (error) {
        // @ts-ignore
        throw {
            success: false,
            message: 'Error in updating order',
        };
    }
}
exports.updateOrder = updateOrder;
// order service for deleting single order
async function deleteOrder(id) {
    try {
        await order_model_1.OrderModel.findByIdAndDelete(id);
    }
    catch (error) {
        // @ts-ignore
        throw {
            success: false,
            message: 'Error in deleting order',
        };
    }
}
exports.deleteOrder = deleteOrder;
exports.orderService = {
    addOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};
