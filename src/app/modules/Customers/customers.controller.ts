/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { customerservices } from './customers.service';

const createcustomers = async (req: Request, res: Response) => {
  try {
    const result = await customerservices.createcustomers(req.body);

    res.status(200).json({
      success: true,
      message: 'customers created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'customers Failed to create',
      error: error.message,
    });
  }
};

const getcustomers = async (req: Request, res: Response): Promise<void> => {
  try {
    const allcustomers = await customerservices.getAllcustomers();

    if (!allcustomers) {
      res.status(404).json({
        success: false,
        message: 'customers Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'customers fetched successfully',
      data: allcustomers,
    });
  } catch (error: any) {
    console.error('Error fetching customers:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching customers',
      error: error.message,
    });
  }
};
const deletecustomers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deletecustomers = await customerservices.deletecustomers(id);

    res.status(200).json({
      success: true,
      message: 'customers delated successfully',
      data: Deletecustomers,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating item',
      error: error.message,
    });
  }
};

const updatecustomers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const UpdatedProduct = await customerservices.updatecustomers(id, payload);
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

export const customersControllers = {
  createcustomers,
  getcustomers,
  deletecustomers,
  updatecustomers,
};
