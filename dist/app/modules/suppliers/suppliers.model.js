"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const mongoose_1 = require("mongoose");
const SupplierSchema = new mongoose_1.Schema({
    supplierId: {
        type: String,
        required: true,
        trim: true,
    },
    supplierName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
});
exports.Supplier = (0, mongoose_1.model)('supplier', SupplierSchema);
