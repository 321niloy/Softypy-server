/* eslint-disable @typescript-eslint/no-unused-vars */

import { Tcustomer } from './customers.interface';
import { Customer } from './customers.model';

const createcustomers = async (payload: Tcustomer) => {
  try {
    console.log('Creating item with payload:', payload); // Improved log message
    const newItem = await Customer.create(payload);
    if (!newItem) {
      throw new Error('Failed to create customers');
    }
    return newItem;
  } catch (error) {
    console.error('Error creating item:', error); // Log the actual error
    throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
  }
};

const getAllcustomers = async () => {
  try {
    const result = await Customer.find();
    return result;
  } catch (error) {
    console.log('some error', error);
  }
};

const deletecustomers = async (id: string) => {
  try {
    console.log('la', id);
    const Delatedcustomers = await Customer.findOneAndDelete({ _id: id });
    if (!Delatedcustomers) {
      throw new Error('Not delated');
    }
    return Delatedcustomers;
  } catch (error) {
    throw new Error('Something went Wrong from Delating');
  }
};

const updatecustomers = async (id: string, payload: Tcustomer) => {
  try {
    const result = await Customer.findByIdAndUpdate({ _id: id }, payload, {
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

export const customerservices = {
  createcustomers,
  getAllcustomers,
  deletecustomers,
  updatecustomers,
};
