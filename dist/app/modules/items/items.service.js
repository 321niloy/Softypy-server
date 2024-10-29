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
exports.itemServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const items_modal_1 = require("./items.modal");
const createItems = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Creating item with payload:', payload); // Improved log message
        const newItem = yield items_modal_1.Items.create(payload);
        if (!newItem) {
            throw new Error('Failed to create items');
        }
        return newItem;
    }
    catch (error) {
        console.error('Error creating item:', error); // Log the actual error
        throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
    }
});
const getAllitems = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield items_modal_1.Items.find();
        return result;
    }
    catch (error) {
        console.log('some error', error);
    }
});
const deleteitems = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('la', id);
        const Delateditems = yield items_modal_1.Items.findOneAndDelete({ _id: id });
        if (!Delateditems) {
            throw new Error('Not delated');
        }
        return Delateditems;
    }
    catch (error) {
        throw new Error('Something went Wrong from Delating');
    }
});
const updateitems = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield items_modal_1.Items.findByIdAndUpdate({ _id: id }, payload, {
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
        if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
            console.log('kamavinga', error === null || error === void 0 ? void 0 : error.code);
            throw new Error('Please use a unique Items id');
        }
        else {
            throw new Error(error.message || 'An unexpected error occurred');
        }
    }
});
// ///////+++++++++++++============================
exports.itemServices = {
    createItems,
    getAllitems,
    deleteitems,
    updateitems,
};
