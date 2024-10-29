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
exports.stockervices = void 0;
const stock_model_1 = require("./stock.model");
const createstock = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Creating item with payload:', payload); // Improved log message
        const newItem = yield stock_model_1.Stock.create(payload);
        if (!newItem) {
            throw new Error('Failed to create stock');
        }
        return newItem;
    }
    catch (error) {
        console.error('Error creating item:', error); // Log the actual error
        throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
    }
});
const getAllstock = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield stock_model_1.Stock.find();
        return result;
    }
    catch (error) {
        console.log('some error', error);
    }
});
const deletestock = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('la', id);
        const Delatedstock = yield stock_model_1.Stock.findOneAndDelete({ _id: id });
        if (!Delatedstock) {
            throw new Error('Not delated');
        }
        return Delatedstock;
    }
    catch (error) {
        throw new Error('Something went Wrong from Delating');
    }
});
const updatestock = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield stock_model_1.Stock.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            throw new Error('Updated Not Successfull');
        }
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
// ///////+++++++++++++============================
exports.stockervices = {
    createstock,
    getAllstock,
    deletestock,
    updatestock,
};
