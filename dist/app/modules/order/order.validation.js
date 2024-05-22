"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
exports.orderValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email({ message: 'Invalid email address' }),
        productId: zod_1.z.string().min(1, { message: 'Product ID is required' }),
        price: zod_1.z.number().min(1, { message: 'Price must be greater than 0' }),
        quantity: zod_1.z.number().min(1, { message: 'Quantity must be greater than 0' }),
    }),
});
