import mongoose, { Schema } from 'mongoose'
import { IInventory, IProduct, IVariant } from './product.interface'

const VariantSchema: Schema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const InventorySchema: Schema = new Schema<IInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: function () { return this.quantity > 0 } }
})

const ProductSchema: Schema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
})

export const ProductModel = mongoose.model<IProduct>('product', ProductSchema)
