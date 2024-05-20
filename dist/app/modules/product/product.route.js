"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zodValidationHandler_1 = require("../../middleware/zodValidationHandler");
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const productRouter = express_1.default.Router();
productRouter.post('/', (0, zodValidationHandler_1.zodValidationHandler)(product_validation_1.productValidation), product_controller_1.productController.createProduct);
productRouter.get('/', product_controller_1.productController.getProducts);
productRouter.get('/:id', product_controller_1.productController.getProduct);
productRouter.put('/:id', (0, zodValidationHandler_1.zodValidationHandler)(product_validation_1.productUpdateValidation), product_controller_1.productController.updateProduct);
productRouter.delete('/:id', product_controller_1.productController.deleteProduct);
exports.default = productRouter;
