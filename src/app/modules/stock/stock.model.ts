import { model, Schema } from 'mongoose';
import { Tstock } from './stock.interface';

const stockSchema = new Schema<Tstock>(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: String,
      required: true,
      trim: true,
    },
    supplier: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const Stock = model<Tstock>('stock', stockSchema);
