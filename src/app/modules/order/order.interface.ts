import { Schema } from "mongoose";

export interface IOrder {
  email: string,
  productId: Schema.Types.ObjectId,
  price: number,
  quantity: number,
}