import { model, Schema } from 'mongoose';
import { Tcategory } from './category.interface';

const categorySchema = new Schema<Tcategory>(
  {
    categoryCode: {
      type: String,
      required: true,
      trim: true,
    },
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

export const Category = model<Tcategory>('category', categorySchema);
