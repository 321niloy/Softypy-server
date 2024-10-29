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
exports.customersControllers = void 0;
const customers_service_1 = require("./customers.service");
const createcustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customers_service_1.customerservices.createcustomers(req.body);
        res.status(200).json({
            success: true,
            message: 'customers created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'customers Failed to create',
            error: error.message,
        });
    }
});
const getcustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allcustomers = yield customers_service_1.customerservices.getAllcustomers();
        if (!allcustomers) {
            res.status(404).json({
                success: false,
                message: 'customers Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'customers fetched successfully',
            data: allcustomers,
        });
    }
    catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching customers',
            error: error.message,
        });
    }
});
const deletecustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deletecustomers = yield customers_service_1.customerservices.deletecustomers(id);
        res.status(200).json({
            success: true,
            message: 'customers delated successfully',
            data: Deletecustomers,
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
const updatecustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const UpdatedProduct = yield customers_service_1.customerservices.updatecustomers(id, payload);
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
exports.customersControllers = {
    createcustomers,
    getcustomers,
    deletecustomers,
    updatecustomers,
};
