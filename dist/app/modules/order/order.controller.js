"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const ApiResponse_1 = require("../../../shared/ApiResponse");
// controller for handling new order
const addOrder = async (req, res) => {
    try {
        const order = req.body;
        const result = await order_service_1.orderService.addOrder(order);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Order created successfully!',
            body: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            // @ts-ignore
            message: error?.message,
        });
    }
};
// controller for handling all orders retrieval
const getOrders = async (req, res) => {
    try {
        const filter = req.query.email || '';
        const result = await order_service_1.orderService.getOrders(filter);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: filter
                ? `Orders fetched successfully for user email!`
                : 'Orders fetched successfully!',
            body: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            // @ts-ignore
            message: error?.message,
        });
    }
};
// controller for handling single order retrieval
const getOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await order_service_1.orderService.getOrder(id);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Order retrieved successfully!',
            body: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            // @ts-ignore
            message: error?.message,
        });
    }
};
// controller for handling single order update
const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = req.body;
        const result = await order_service_1.orderService.updateOrder(id, order);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Order updated successfully!',
            body: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            // @ts-ignore
            message: error?.message,
        });
    }
};
// controller for handling single order deletion
const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        await order_service_1.orderService.deleteOrder(id);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Order deleted successfully!',
            body: null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            // @ts-ignore
            message: error?.message,
        });
    }
};
exports.orderController = {
    addOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};
