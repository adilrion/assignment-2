"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidation = exports.productValidation = void 0;
const zod_1 = require("zod");
// zod validation for product schema
exports.productValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3).max(255),
        description: zod_1.z.string().min(3).max(255),
        price: zod_1.z.number().min(1),
        category: zod_1.z.string().min(3).max(255),
        tags: zod_1.z.array(zod_1.z.string()).min(1),
        variants: zod_1.z
            .array(zod_1.z.object({
            type: zod_1.z.string().min(3).max(255),
            value: zod_1.z.string().min(3).max(255),
        }))
            .min(1),
        inventory: zod_1.z.object({
            quantity: zod_1.z.number().optional(),
            inStock: zod_1.z.boolean().optional(),
        }),
    }),
});
exports.productUpdateValidation = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(3).max(255).optional(),
        description: zod_1.z.string().min(3).max(255).optional(),
        price: zod_1.z.number().min(1).optional(),
        category: zod_1.z.string().min(3).max(255).optional(),
        tags: zod_1.z.array(zod_1.z.string()).min(1).optional(),
        variants: zod_1.z
            .array(zod_1.z.object({
            type: zod_1.z.string().min(3).max(255),
            value: zod_1.z.string().min(3).max(255),
        }))
            .min(1)
            .optional(),
        inventory: zod_1.z.object({
            quantity: zod_1.z.number().optional(),
            inStock: zod_1.z.boolean().optional(),
        }),
    })
        .partial(),
});
