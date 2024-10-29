"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    categoryCode: {
        type: String,
        required: true,
        trim: true,
    },
    categoryName: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
});
exports.Category = (0, mongoose_1.model)('category', categorySchema);
