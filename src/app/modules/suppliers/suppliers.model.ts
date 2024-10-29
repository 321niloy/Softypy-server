import { model, Schema } from 'mongoose';
import { Tsupplier } from './suppliers.inteface';

const SupplierSchema = new Schema<Tsupplier>(
  {
    supplierId: {
      type: String,
      required: true,
      trim: true,
    },
    supplierName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const Supplier = model<Tsupplier>('supplier', SupplierSchema);
