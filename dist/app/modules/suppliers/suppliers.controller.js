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
exports.suppliersControllers = void 0;
const suppliers_service_1 = require("./suppliers.service");
const createsuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('aiho', req.body);
        const result = yield suppliers_service_1.supplierServices.createsuppliers(req.body);
        res.status(200).json({
            success: true,
            message: 'suppliers created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Products Failed to create course',
            error: error.message,
        });
    }
});
const getsuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allsuppliers = yield suppliers_service_1.supplierServices.getAllsuppliers();
        if (!allsuppliers) {
            res.status(404).json({
                success: false,
                message: 'suppliers Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'suppliers fetched successfully',
            data: allsuppliers,
        });
    }
    catch (error) {
        console.error('Error fetching suppliers:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching suppliers',
            error: error.message,
        });
    }
});
const deletesuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deletesuppliers = yield suppliers_service_1.supplierServices.deletesuppliers(id);
        res.status(200).json({
            success: true,
            message: 'suppliers delated successfully',
            data: Deletesuppliers,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something whent Wrong for Delating supplier',
            error: error.message,
        });
    }
});
const updatesuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        console.log('lalata', id, payload);
        const Updatedsupplier = yield suppliers_service_1.supplierServices.updatesuppliers(id, payload);
        res.status(200).json({
            success: true,
            message: 'supplier Updated successfully',
            data: Updatedsupplier,
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
exports.suppliersControllers = {
    createsuppliers,
    getsuppliers,
    deletesuppliers,
    updatesuppliers,
};
