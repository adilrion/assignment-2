"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const zodValidationHandler_1 = require("../../middleware/zodValidationHandler");
const order_validation_1 = require("./order.validation");
const orderRouter = express_1.default.Router();
orderRouter.post('/', (0, zodValidationHandler_1.zodValidationHandler)(order_validation_1.orderValidation), order_controller_1.orderController.addOrder);
orderRouter.get('/', order_controller_1.orderController.getOrders);
orderRouter.get('/:id', order_controller_1.orderController.getOrder);
orderRouter.put('/:id', order_controller_1.orderController.updateOrder);
orderRouter.delete('/:id', order_controller_1.orderController.deleteOrder);
exports.default = orderRouter;
