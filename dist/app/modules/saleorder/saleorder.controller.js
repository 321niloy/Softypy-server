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
exports.saleorderControllers = void 0;
const saleorder_service_1 = require("./saleorder.service");
const createsaleorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('aiho', req.body);
        const result = yield saleorder_service_1.saleorderervices.createsaleorder(req.body);
        res.status(200).json({
            success: true,
            message: 'saleorder created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'saleorder Failed to create',
            error: error.message,
        });
    }
});
const getsaleorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allsaleorder = yield saleorder_service_1.saleorderervices.getAllsaleorder();
        if (!allsaleorder) {
            res.status(404).json({
                success: false,
                message: 'saleorder Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'saleorder fetched successfully',
            data: allsaleorder,
        });
    }
    catch (error) {
        console.error('Error fetching saleorder:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching saleorder',
            error: error.message,
        });
    }
});
const deletesaleorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deletesaleorder = yield saleorder_service_1.saleorderervices.deletesaleorder(id);
        res.status(200).json({
            success: true,
            message: 'saleorder delated successfully',
            data: Deletesaleorder,
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
const updatesaleorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const UpdatedProduct = yield saleorder_service_1.saleorderervices.updatesaleorder(id, payload);
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
exports.saleorderControllers = {
    createsaleorder,
    getsaleorder,
    deletesaleorder,
    updatesaleorder,
};
