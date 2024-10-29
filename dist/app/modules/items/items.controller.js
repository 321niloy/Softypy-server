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
exports.itemsControllers = void 0;
const items_service_1 = require("./items.service");
const createitems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('aiho', req.body);
        const result = yield items_service_1.itemServices.createItems(req.body);
        res.status(200).json({
            success: true,
            message: 'Items created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Items Failed to create',
            error: error.message,
        });
    }
});
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allItems = yield items_service_1.itemServices.getAllitems();
        if (!allItems) {
            res.status(404).json({
                success: false,
                message: 'Items Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Items fetched successfully',
            data: allItems,
        });
    }
    catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching items',
            error: error.message,
        });
    }
});
const deleteitems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deleteitems = yield items_service_1.itemServices.deleteitems(id);
        res.status(200).json({
            success: true,
            message: 'items delated successfully',
            data: Deleteitems,
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
const updateitems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        console.log('mAL PIAN item', req.body, id);
        const UpdatedProduct = yield items_service_1.itemServices.updateitems(id, payload);
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
exports.itemsControllers = {
    createitems,
    getItems,
    deleteitems,
    updateitems,
};
