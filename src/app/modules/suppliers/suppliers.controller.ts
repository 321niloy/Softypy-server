/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { supplierServices } from './suppliers.service';

const createsuppliers = async (req: Request, res: Response) => {
  try {
    console.log('aiho', req.body);
    const result = await supplierServices.createsuppliers(req.body);

    res.status(200).json({
      success: true,
      message: 'suppliers created successfully',
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

const getsuppliers = async (req: Request, res: Response): Promise<void> => {
  try {
    const allsuppliers = await supplierServices.getAllsuppliers();

    if (!allsuppliers) {
      res.status(404).json({
        success: false,
        message: 'suppliers Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'suppliers fetched successfully',
      data: allsuppliers,
    });
  } catch (error: any) {
    console.error('Error fetching suppliers:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching suppliers',
      error: error.message,
    });
  }
};
const deletesuppliers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deletesuppliers = await supplierServices.deletesuppliers(id);

    res.status(200).json({
      success: true,
      message: 'suppliers delated successfully',
      data: Deletesuppliers,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating supplier',
      error: error.message,
    });
  }
};

const updatesuppliers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    console.log('lalata', id, payload);
    const Updatedsupplier = await supplierServices.updatesuppliers(id, payload);
    res.status(200).json({
      success: true,
      message: 'supplier Updated successfully',
      data: Updatedsupplier,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Somthing whent Wrong in Updated Operation',
      error: error.message,
    });
  }
};

export const suppliersControllers = {
  createsuppliers,
  getsuppliers,
  deletesuppliers,
  updatesuppliers,
};
