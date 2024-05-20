"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("./product.model");
// save new product
const saveProduct = async (product) => {
    const result = await product_model_1.ProductModel.create(product);
    if (!result)
        throw {
            success: false,
            message: 'Error in adding product',
        };
    return result;
};
// get all product
const getProducts = async (searchTerm) => {
    const result = await product_model_1.ProductModel.find({ name: new RegExp(searchTerm, 'i') });
    if (!result)
        throw {
            success: false,
            message: 'Product not found',
        };
    return result;
};
// get single product
const getProduct = async (id) => {
    const result = await product_model_1.ProductModel.findById(id);
    if (!result)
        throw {
            success: false,
            message: 'Product not found',
        };
    return result;
};
// update single product
const updateProduct = async (id, product) => {
    const result = await product_model_1.ProductModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    if (!result)
        throw {
            success: false,
            message: 'Product not updated',
        };
    return result;
};
//  delete single product
const deleteProduct = async (id) => {
    const result = await product_model_1.ProductModel.findByIdAndDelete(id);
    if (!result)
        throw {
            success: false,
            message: 'Product not deleted',
        };
};
exports.productService = {
    saveProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
