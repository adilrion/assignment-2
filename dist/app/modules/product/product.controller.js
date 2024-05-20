"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const ApiResponse_1 = require("../../../shared/ApiResponse");
const product_services_1 = require("./product.services");
// product controller for handling new product creation
const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const result = await product_services_1.productService.saveProduct(product);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Product created successfully!',
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
// product controller for handling all product retrieval
const getProducts = async (req, res) => {
    try {
        const searchTerm = req.query.searchTerm || '';
        console.log("🚀 ~ constgetProducts:RequestHandler= ~ searchTerm:", searchTerm);
        const result = await product_services_1.productService.getProducts(searchTerm);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Products retrieved successfully!',
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
// product controller for handling single product retrieval
const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await product_services_1.productService.getProduct(id);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Product retrieved successfully!',
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
// product controller for handling single product update
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = req.body;
        const result = await product_services_1.productService.updateProduct(id, product);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Product updated successfully!',
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
// product controller for handling single product deletion
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await product_services_1.productService.deleteProduct(id);
        (0, ApiResponse_1.ApiResponse)(res, {
            statusCode: 200,
            success: true,
            message: 'Product deleted successfully!',
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
exports.productController = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
