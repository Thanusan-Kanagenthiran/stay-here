import mongoose, { model, Schema } from "mongoose";

export interface PropertyTypeDocument {
  title: string;
  description: string;
}

const PropertyTypeSchema = new Schema<PropertyTypeDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
);

const PropertyType = mongoose.models?.PropertyType || model<PropertyTypeDocument>("PropertyType", PropertyTypeSchema);
export default PropertyType;


