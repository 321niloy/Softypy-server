"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const mongoose_1 = require("mongoose");
const stockSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    sku: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: String,
        required: true,
        trim: true,
    },
    supplier: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
});
exports.Stock = (0, mongoose_1.model)('stock', stockSchema);
