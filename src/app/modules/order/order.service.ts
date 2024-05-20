import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";



// order service for added new order
export async function addOrder(order: IOrder): Promise<IOrder> {
  try {
    const newOrder = await OrderModel.create(order);
    return newOrder;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in adding order');
  }
}


// order service for getting all orders
export async function getOrders(): Promise<IOrder[]> {
  try {
    const orders = await OrderModel.find();
    return orders;
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in getting orders');
  }
}


// order service for getting single order
export async function getOrder(id: string): Promise<IOrder | null> {
  try {
    const order = await OrderModel.findById(id);
    return order;
  }
  catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in getting order');
  }
}


// order service for updating single order
export async function updateOrder(id: string, order: IOrder): Promise<IOrder | null> {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, order, { new: true });
    return updatedOrder;
  }
  catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in updating order');
  }
}


// order service for deleting single order
export async function deleteOrder(id: string): Promise<void> {
  try {
    await OrderModel.findByIdAndDelete(id);
  }
  catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in deleting order');
  }
}

export const orderService = {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}
