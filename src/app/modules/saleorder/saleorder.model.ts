import { model, Schema } from 'mongoose';
import { Tsaleorder } from './saleorder.interface';

const saleOrderSchema = new Schema<Tsaleorder>(
  {
    invoiceNumber: {
      type: String,
      required: true,
      trim: true,
    },
    customer: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const SaleOrder = model<Tsaleorder>('saleorder', saleOrderSchema);
