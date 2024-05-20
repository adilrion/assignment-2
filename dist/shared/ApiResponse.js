"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const ApiResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data?.message || null,
        body: data?.body || null,
    });
};
exports.ApiResponse = ApiResponse;
