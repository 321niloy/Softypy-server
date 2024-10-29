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
exports.categorysControllers = void 0;
const category_service_1 = require("./category.service");
const createcategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.categoryServices.createCategory(req.body);
        res.status(200).json({
            success: true,
            message: 'categorys created successfully',
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
const getcategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allcategorys = yield category_service_1.categoryServices.getAllCategories();
        if (!allcategorys) {
            res.status(404).json({
                success: false,
                message: 'categorys Not Found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'categorys fetched successfully',
            data: allcategorys,
        });
    }
    catch (error) {
        console.error('Error fetching categorys:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching categorys',
            error: error.message,
        });
    }
});
const deletecategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Deletecategorys = yield category_service_1.categoryServices.deleteCategory(id);
        res.status(200).json({
            success: true,
            message: 'categorys delated successfully',
            data: Deletecategorys,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something whent Wrong for Delating category',
            error: error.message,
        });
    }
});
const updatecategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        console.log('haha', id, payload);
        const UpdatedCategory = yield category_service_1.categoryServices.updateCategory(id, payload);
        res.status(200).json({
            success: true,
            message: 'category Updated successfully',
            data: UpdatedCategory,
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
exports.categorysControllers = {
    createcategorys,
    getcategorys,
    deletecategorys,
    updatecategorys,
};
