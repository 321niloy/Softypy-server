"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const mongoose_1 = require("mongoose");
const itemsSchema = new mongoose_1.Schema({
    itemsCode: {
        type: String,
        required: true,
        trim: true,
    },
    itemsName: {
        type: String,
        required: true,
        trim: true,
    },
    categoryName: {
        type: String,
        required: true,
        trim: true,
    },
    costPrice: {
        type: String,
        required: true,
        trim: true,
    },
    sellingPrice: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
});
exports.Items = (0, mongoose_1.model)('items', itemsSchema);
