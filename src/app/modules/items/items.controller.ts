/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { itemServices } from './items.service';

const createitems = async (req: Request, res: Response) => {
  try {
    console.log('aiho', req.body);
    const result = await itemServices.createItems(req.body);

    res.status(200).json({
      success: true,
      message: 'Items created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Items Failed to create',
      error: error.message,
    });
  }
};

const getItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const allItems = await itemServices.getAllitems();

    if (!allItems) {
      res.status(404).json({
        success: false,
        message: 'Items Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Items fetched successfully',
      data: allItems,
    });
  } catch (error: any) {
    console.error('Error fetching items:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching items',
      error: error.message,
    });
  }
};
const deleteitems = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deleteitems = await itemServices.deleteitems(id);

    res.status(200).json({
      success: true,
      message: 'items delated successfully',
      data: Deleteitems,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating item',
      error: error.message,
    });
  }
};

const updateitems = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    console.log('mAL PIAN item', req.body, id);
    const UpdatedProduct = await itemServices.updateitems(id, payload);
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

export const itemsControllers = {
  createitems,
  getItems,
  deleteitems,
  updateitems,
};
