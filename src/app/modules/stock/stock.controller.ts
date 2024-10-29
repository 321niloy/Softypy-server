/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { stockervices } from './stock.service';

const createstock = async (req: Request, res: Response) => {
  try {
    console.log('aiho', req.body);
    const result = await stockervices.createstock(req.body);

    res.status(200).json({
      success: true,
      message: 'stock created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'stock Failed to create',
      error: error.message,
    });
  }
};

const getstock = async (req: Request, res: Response): Promise<void> => {
  try {
    const allstock = await stockervices.getAllstock();

    if (!allstock) {
      res.status(404).json({
        success: false,
        message: 'stock Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'stock fetched successfully',
      data: allstock,
    });
  } catch (error: any) {
    console.error('Error fetching stock:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching stock',
      error: error.message,
    });
  }
};
const deletestock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deletestock = await stockervices.deletestock(id);

    res.status(200).json({
      success: true,
      message: 'stock delated successfully',
      data: Deletestock,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating item',
      error: error.message,
    });
  }
};

const updatestock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const UpdatedProduct = await stockervices.updatestock(id, payload);
    res.status(200).json({
      success: true,
      message: 'item Updated successfully',
      data: UpdatedProduct,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Somthing whent Wrong in Updated Operation',
      error: error.message,
    });
  }
};

export const stockControllers = {
  createstock,
  getstock,
  deletestock,
  updatestock,
};
