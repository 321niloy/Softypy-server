import { model, Schema } from 'mongoose';
import { Titems } from './items.iterface';

const itemsSchema = new Schema<Titems>(
  {
    itemsCode: {
      type: String,
      required: true,
      trim: true,
    },
    itemsName: {
      type: String,
      required: true,
      trim: true,
    },
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    costPrice: {
      type: String,
      required: true,
      trim: true,
    },
    sellingPrice: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const Items = model<Titems>('items', itemsSchema);
