/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Items } from './items.modal';
import { Titems } from './items.iterface';

const createItems = async (payload: Titems) => {
  try {
    console.log('Creating item with payload:', payload); // Improved log message
    const newItem = await Items.create(payload);
    if (!newItem) {
      throw new Error('Failed to create items');
    }
    return newItem;
  } catch (error) {
    console.error('Error creating item:', error); // Log the actual error
    throw new Error('Something went wrong in Products Created Service: '); // Append the original error message
  }
};

const getAllitems = async () => {
  try {
    const result = await Items.find();
    return result;
  } catch (error) {
    console.log('some error', error);
  }
};

const deleteitems = async (id: string) => {
  try {
    console.log('la', id);
    const Delateditems = await Items.findOneAndDelete({ _id: id });
    if (!Delateditems) {
      throw new Error('Not delated');
    }
    return Delateditems;
  } catch (error) {
    throw new Error('Something went Wrong from Delating');
  }
};

const updateitems = async (id: string, payload: Titems) => {
  try {
    const result = await Items.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      throw new Error('Updated Not Successfull');
    }
    return result;
  } catch (error: any) {
    console.log(error);
    if (error?.code === 11000) {
      console.log('kamavinga', error?.code);
      throw new Error('Please use a unique Items id');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

// ///////+++++++++++++============================

export const itemServices = {
  createItems,
  getAllitems,
  deleteitems,
  updateitems,
};
