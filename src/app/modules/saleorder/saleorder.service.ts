/* eslint-disable @typescript-eslint/no-unused-vars */

import { Tsaleorder } from './saleorder.interface';
import { SaleOrder } from './saleorder.model';

const createsaleorder = async (payload: Tsaleorder) => {
  try {
    console.log('Creating item with payload:', payload); // Improved log message
    const newItem = await SaleOrder.create(payload);
    if (!newItem) {
      throw new Error('Failed to create saleorder');
    }
    return newItem;
  } catch (error) {
    console.error('Error creating item:', error); // Log the actual error
    throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
  }
};

const getAllsaleorder = async () => {
  try {
    const result = await SaleOrder.find();
    return result;
  } catch (error) {
    console.log('some error', error);
  }
};

const deletesaleorder = async (id: string) => {
  try {
    console.log('la', id);
    const Delatedsaleorder = await SaleOrder.findOneAndDelete({ _id: id });
    if (!Delatedsaleorder) {
      throw new Error('Not delated');
    }
    return Delatedsaleorder;
  } catch (error) {
    throw new Error('Something went Wrong from Delating');
  }
};

const updatesaleorder = async (id: string, payload: Tsaleorder) => {
  try {
    const result = await SaleOrder.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      throw new Error('Updated Not Successfull');
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// ///////+++++++++++++============================

export const saleorderervices = {
  createsaleorder,
  getAllsaleorder,
  deletesaleorder,
  updatesaleorder,
};
