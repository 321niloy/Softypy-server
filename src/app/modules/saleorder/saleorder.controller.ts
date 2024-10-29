/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { saleorderervices } from './saleorder.service';


const createsaleorder = async (req: Request, res: Response) => {
  try {
    console.log('aiho', req.body);
    const result = await saleorderervices.createsaleorder(req.body);

    res.status(200).json({
      success: true,
      message: 'saleorder created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'saleorder Failed to create',
      error: error.message,
    });
  }
};

const getsaleorder = async (req: Request, res: Response): Promise<void> => {
  try {
    const allsaleorder = await saleorderervices.getAllsaleorder();

    if (!allsaleorder) {
      res.status(404).json({
        success: false,
        message: 'saleorder Not Found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'saleorder fetched successfully',
      data: allsaleorder,
    });
  } catch (error: any) {
    console.error('Error fetching saleorder:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching saleorder',
      error: error.message,
    });
  }
};
const deletesaleorder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const Deletesaleorder = await saleorderervices.deletesaleorder(id);

    res.status(200).json({
      success: true,
      message: 'saleorder delated successfully',
      data: Deletesaleorder,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'Something whent Wrong for Delating item',
      error: error.message,
    });
  }
};

const updatesaleorder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const UpdatedProduct = await saleorderervices.updatesaleorder(id, payload);
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

export const saleorderControllers = {
  createsaleorder,
  getsaleorder,
  deletesaleorder,
  updatesaleorder,
};
