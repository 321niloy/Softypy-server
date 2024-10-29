/* eslint-disable @typescript-eslint/no-unused-vars */

import { Tcategory } from './category.interface';
import { Category } from './category.modal';

const createCategory = async (payload: Tcategory) => {
  try {
    console.log('MoNU', payload);
    const newCategory = await Category.create(payload);
    if (!newCategory) {
      throw new Error('Failed to create category');
    }
    return newCategory;
  } catch (error: any) {
    if (error?.code === 11000) {
      // Adjust error handling as needed
      throw new Error('Try using another code');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

const getAllCategories = async () => {
  try {
    const result = await Category.find();
    return result;
  } catch (error) {
    console.log('An error occurred while fetching categories:', error);
  }
};

const deleteCategory = async (id: string) => {
  try {
    console.log('ID to delete:', id);
    const deletedCategory = await Category.findOneAndDelete({ _id: id });
    if (!deletedCategory) {
      throw new Error('Deletion unsuccessful');
    }
    return deletedCategory;
  } catch (error) {
    throw new Error('Something went wrong while deleting');
  }
};

const updateCategory = async (id: string, payload: Tcategory) => {
  try {
    const result = await Category.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      throw new Error('Update unsuccessful');
    }
    return result;
  } 
  catch (error: any) {
    console.log(error, 'Update error');
    if (error?.code === 11000) {
      throw new Error('Please use a unique category code');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

export const categoryServices = {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
