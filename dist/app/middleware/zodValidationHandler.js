"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodValidationHandler = void 0;
// zod validation handler middleware
const zodValidationHandler = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (error) {
        console.log("🚀 ~ error:", error);
        res.status(400).json({
            success: false,
            message: 'Invalid request data',
        });
    }
};
exports.zodValidationHandler = zodValidationHandler;
