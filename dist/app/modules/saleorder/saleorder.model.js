"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleOrder = void 0;
const mongoose_1 = require("mongoose");
const saleOrderSchema = new mongoose_1.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        trim: true,
    },
    customer: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
});
exports.SaleOrder = (0, mongoose_1.model)('saleorder', saleOrderSchema);
