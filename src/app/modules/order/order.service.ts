import { ProductModel } from '../product/product.model'
import { IOrder } from './order.interface'
import { OrderModel } from './order.model'

// order service for added new order

export async function addOrder(order: IOrder): Promise<IOrder> {
  try {
    const product = await ProductModel.findById(order.productId)

    if (!product) {
      const errorResponse = {
        success: false,
        message: 'Product not found',
      }
      throw errorResponse
    }

    if (order.quantity > product?.inventory?.quantity) {
      const errorResponse = {
        success: false,
        message: 'Insufficient quantity available in inventory',
      }
      throw errorResponse
    }

    // Update inventory quantity and inStock status
    product.inventory.quantity -= order.quantity
    product.inventory.inStock = product?.inventory?.quantity > 0

    await product.save()

    const newOrder = await OrderModel.create(order)
    return newOrder
  } catch (error) {
    throw error
  }
}

// order service for getting all orders
export async function getOrders(email: string): Promise<IOrder[]> {
  try {
    const pipeline = [
      ...(email ? [{ $match: { email } }] : []),
      {
        $project: {
          email: 1,
          price: 1,
          quantity: 1,
          product: 1,
        },
      },
    ]

    const orders = await OrderModel.aggregate(pipeline).exec()

    if (orders.length <= 0) {
      const errorResponse = {
        success: false,
        message: 'Orders not found',
      }
      throw errorResponse
    }

    return orders
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in getting orders')
  }
}

// order service for getting single order
export async function getOrder(id: string): Promise<IOrder | null> {
  try {
    const order = await OrderModel.findById(id)
    return order
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in getting order')
  }
}

// order service for updating single order
export async function updateOrder(
  id: string,
  order: IOrder,
): Promise<IOrder | null> {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, order, {
      new: true,
    })
    return updatedOrder
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in updating order')
  }
}

// order service for deleting single order
export async function deleteOrder(id: string): Promise<void> {
  try {
    await OrderModel.findByIdAndDelete(id)
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message || 'Error in deleting order')
  }
}

export const orderService = {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}
