import { model, Schema } from 'mongoose';
import { Tcustomer } from './customers.interface';

const customerSchema = new Schema<Tcustomer>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
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
    address: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    district: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const Customer = model<Tcustomer>('customer', customerSchema);
