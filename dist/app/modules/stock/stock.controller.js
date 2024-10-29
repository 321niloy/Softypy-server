"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockControllers = void 0;
const stock_service_1 = require("./stock.service");
const createstock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('aiho', req.body);
        const result = yield stock_service_1.stockervices.createstock(req.body);
        res.status(200).json({
            success: true,
            message: 'stock created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'stock Failed to create',
            error: error.message,
        });
    }
});
const getstock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allstock = yield stock_service_1.stockervices.getAllstock();
        if (!allstock) {
            res.status(404).json({
                success: false,
                message: 'stock Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'stock fetched successfully',
            data: allstock,
        });
    }
    catch (error) {
        console.error('Error fetching stock:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching stock',
            error: error.message,
        });
    }
});
const deletestock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deletestock = yield stock_service_1.stockervices.deletestock(id);
        res.status(200).json({
            success: true,
            message: 'stock delated successfully',
            data: Deletestock,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something whent Wrong for Delating item',
            error: error.message,
        });
    }
});
const updatestock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const UpdatedProduct = yield stock_service_1.stockervices.updatestock(id, payload);
        res.status(200).json({
            success: true,
            message: 'item Updated successfully',
            data: UpdatedProduct,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Somthing whent Wrong in Updated Operation',
            error: error.message,
        });
    }
});
exports.stockControllers = {
    createstock,
    getstock,
    deletestock,
    updatestock,
};
