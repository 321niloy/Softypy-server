"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
exports.categoryServices = void 0;
const category_modal_1 = require("./category.modal");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('MoNU', payload);
        const newCategory = yield category_modal_1.Category.create(payload);
        if (!newCategory) {
            throw new Error('Failed to create category');
        }
        return newCategory;
    }
    catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
            // Adjust error handling as needed
            throw new Error('Try using another code');
        }
        else {
            throw new Error(error.message || 'An unexpected error occurred');
        }
    }
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_modal_1.Category.find();
        return result;
    }
    catch (error) {
        console.log('An error occurred while fetching categories:', error);
    }
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('ID to delete:', id);
        const deletedCategory = yield category_modal_1.Category.findOneAndDelete({ _id: id });
        if (!deletedCategory) {
            throw new Error('Deletion unsuccessful');
        }
        return deletedCategory;
    }
    catch (error) {
        throw new Error('Something went wrong while deleting');
    }
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_modal_1.Category.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            throw new Error('Update unsuccessful');
        }
        return result;
    }
    catch (error) {
        console.log(error, 'Update error');
        if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
            throw new Error('Please use a unique category code');
        }
        else {
            throw new Error(error.message || 'An unexpected error occurred');
        }
    }
});
exports.categoryServices = {
    createCategory,
    getAllCategories,
    deleteCategory,
    updateCategory,
};
