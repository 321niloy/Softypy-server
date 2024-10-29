"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
exports.supplierServices = void 0;
const suppliers_model_1 = require("./suppliers.model");
const createsuppliers = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Newsuppliers = yield suppliers_model_1.Supplier.create(payload);
        if (!Newsuppliers) {
            throw new Error('Failed to create suppliers');
        }
        return Newsuppliers;
    }
    catch (error) {
        console.log(error);
        if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
            console.log('kamavinga', error === null || error === void 0 ? void 0 : error.code);
            throw new Error('Please use a unique Supplier id');
        }
        else {
            throw new Error(error.message || 'An unexpected error occurred');
        }
    }
});
const getAllsuppliers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_model_1.Supplier.find();
        return result;
    }
    catch (error) {
        console.log('some error', error);
    }
});
const deletesuppliers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('la', id);
        const Delatedsuppliers = yield suppliers_model_1.Supplier.findOneAndDelete({ _id: id });
        if (!Delatedsuppliers) {
            throw new Error('Not delated');
        }
        return Delatedsuppliers;
    }
    catch (error) {
        throw new Error('Something went Wrong from Delating');
    }
});
const updatesuppliers = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield suppliers_model_1.Supplier.findByIdAndUpdate({ _id: id }, payload, {
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
exports.supplierServices = {
    createsuppliers,
    getAllsuppliers,
    deletesuppliers,
    updatesuppliers,
};
