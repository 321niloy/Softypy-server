/* eslint-disable @typescript-eslint/no-unused-vars */

import { Tstock } from './stock.interface';
import { Stock } from './stock.model';

const createstock = async (payload: Tstock) => {
  try {
    console.log('Creating item with payload:', payload); // Improved log message
    const newItem = await Stock.create(payload);
    if (!newItem) {
      throw new Error('Failed to create stock');
    }
    return newItem;
  } catch (error) {
    console.error('Error creating item:', error); // Log the actual error
    throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
  }
};

const getAllstock = async () => {
  try {
    const result = await Stock.find();
    return result;
  } catch (error) {
    console.log('some error', error);
  }
};

const deletestock = async (id: string) => {
  try {
    console.log('la', id);
    const Delatedstock = await Stock.findOneAndDelete({ _id: id });
    if (!Delatedstock) {
      throw new Error('Not delated');
    }
    return Delatedstock;
  } catch (error) {
    throw new Error('Something went Wrong from Delating');
  }
};

const updatestock = async (id: string, payload: Tstock) => {
  try {
    const result = await Stock.findByIdAndUpdate({ _id: id }, payload, {
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

export const stockervices = {
  createstock,
  getAllstock,
  deletestock,
  updatestock,
};
