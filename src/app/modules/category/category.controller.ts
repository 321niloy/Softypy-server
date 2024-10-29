/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { categoryServices } from './category.service';

const createcategorys = async (req: Request, res: Response) => {
  try {
    
    const result = await categoryServices.createCategory(req.body);

    res.status(200).json({
      success: true,
      message: 'categorys created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Products Failed to create course',
      error: error.message,
    });
  }
};

const getcategorys = async (req: Request, res: Response): Promise<void> => {
  try {
    const allcategorys = await categoryServices.getAllCategories();

    if (!allcategorys) {
      res.status(404).json({
        success: false,
        message: 'categorys Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'categorys fetched successfully',
      data: allcategorys,
    });
  } catch (error: any) {
    console.error('Error fetching categorys:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching categorys',
      error: error.message,
    });
  }
};
const deletecategorys = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deletecategorys = await categoryServices.deleteCategory(id);

    res.status(200).json({
      success: true,
      message: 'categorys delated successfully',
      data: Deletecategorys,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating category',
      error: error.message,
    });
  }
};

const updatecategorys = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    console.log('haha', id, payload);
    const UpdatedCategory = await categoryServices.updateCategory(id, payload);
    res.status(200).json({
      success: true,
      message: 'category Updated successfully',
      data: UpdatedCategory,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Somthing whent Wrong in Updated Operation',
      error: error.message,
    });
  }
};

export const categorysControllers = {
  createcategorys,
  getcategorys,
  deletecategorys,
  updatecategorys,
};
