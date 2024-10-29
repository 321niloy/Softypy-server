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
exports.saleorderervices = void 0;
const saleorder_model_1 = require("./saleorder.model");
const createsaleorder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Creating item with payload:', payload); // Improved log message
        const newItem = yield saleorder_model_1.SaleOrder.create(payload);
        if (!newItem) {
            throw new Error('Failed to create saleorder');
        }
        return newItem;
    }
    catch (error) {
        console.error('Error creating item:', error); // Log the actual error
        throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
    }
});
const getAllsaleorder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield saleorder_model_1.SaleOrder.find();
        return result;
    }
    catch (error) {
        console.log('some error', error);
    }
});
const deletesaleorder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('la', id);
        const Delatedsaleorder = yield saleorder_model_1.SaleOrder.findOneAndDelete({ _id: id });
        if (!Delatedsaleorder) {
            throw new Error('Not delated');
        }
        return Delatedsaleorder;
    }
    catch (error) {
        throw new Error('Something went Wrong from Delating');
    }
});
const updatesaleorder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield saleorder_model_1.SaleOrder.findByIdAndUpdate({ _id: id }, payload, {
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
exports.saleorderervices = {
    createsaleorder,
    getAllsaleorder,
    deletesaleorder,
    updatesaleorder,
};
