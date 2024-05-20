"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = __importDefault(require("../modules/product/product.route"));
const order_route_1 = __importDefault(require("../modules/order/order.route"));
const applicationRouter = express_1.default.Router();
const allRouters = [
    {
        path: '/products',
        route: product_route_1.default,
    },
    {
        path: '/orders',
        route: order_route_1.default
    }
];
allRouters?.forEach(route => {
    applicationRouter.use(route?.path, route?.route);
});
exports.default = applicationRouter;
