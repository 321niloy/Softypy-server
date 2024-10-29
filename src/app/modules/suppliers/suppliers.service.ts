/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Tsupplier } from './suppliers.inteface';
import { Supplier } from './suppliers.model';

const createsuppliers = async (payload: Tsupplier) => {
  try {
    const Newsuppliers = await Supplier.create(payload);
    if (!Newsuppliers) {
      throw new Error('Failed to create suppliers');
    }
    return Newsuppliers;
  } catch (error: any) {
    console.log(error);
    if (error?.code === 11000) {
      console.log('kamavinga', error?.code);
      throw new Error('Please use a unique Supplier id');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

const getAllsuppliers = async () => {
  try {
    const result = await Supplier.find();
    return result;
  } catch (error) {
    console.log('some error', error);
  }
};

const deletesuppliers = async (id: string) => {
  try {
    console.log('la', id);
    const Delatedsuppliers = await Supplier.findOneAndDelete({ _id: id });
    if (!Delatedsuppliers) {
      throw new Error('Not delated');
    }
    return Delatedsuppliers;
  } catch (error) {
    throw new Error('Something went Wrong from Delating');
  }
};

const updatesuppliers = async (id: string, payload: Tsupplier) => {
  try {
    const result = await Supplier.findByIdAndUpdate({ _id: id }, payload, {
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

export const supplierServices = {
  createsuppliers,
  getAllsuppliers,
  deletesuppliers,
  updatesuppliers,
};
