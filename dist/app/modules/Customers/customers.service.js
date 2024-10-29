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
exports.customerservices = void 0;
const customers_model_1 = require("./customers.model");
const createcustomers = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Creating item with payload:', payload); // Improved log message
        const newItem = yield customers_model_1.Customer.create(payload);
        if (!newItem) {
            throw new Error('Failed to create customers');
        }
        return newItem;
    }
    catch (error) {
        console.error('Error creating item:', error); // Log the actual error
        throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
    }
});
const getAllcustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customers_model_1.Customer.find();
        return result;
    }
    catch (error) {
        console.log('some error', error);
    }
});
const deletecustomers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('la', id);
        const Delatedcustomers = yield customers_model_1.Customer.findOneAndDelete({ _id: id });
        if (!Delatedcustomers) {
            throw new Error('Not delated');
        }
        return Delatedcustomers;
    }
    catch (error) {
        throw new Error('Something went Wrong from Delating');
    }
});
const updatecustomers = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customers_model_1.Customer.findByIdAndUpdate({ _id: id }, payload, {
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
exports.customerservices = {
    createcustomers,
    getAllcustomers,
    deletecustomers,
    updatecustomers,
};
