import { ProductModel } from '../product/product.model'
import { IOrder } from './order.interface'
import { OrderModel } from './order.model'

// order service for added new order

export async function addOrder(order: IOrder): Promise<IOrder> {
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
}

// order service for getting all orders
export async function getOrders(email: string): Promise<IOrder[]> {
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
}

// order service for getting single order
export async function getOrder(id: string): Promise<IOrder | null> {
  const order = await OrderModel.findById(id)

  if (!order) {
    const errorResponse = {
      success: false,
      message: 'Order not found',
    }
    throw errorResponse
  }
  return order
}

// order service for updating single order
export async function updateOrder(
  id: string,
  order: IOrder,
): Promise<IOrder | null> {
  const updatedOrder = await OrderModel.findByIdAndUpdate(id, order, {
    new: true,
  })

  if (!updatedOrder) {
    const errorResponse = {
      success: false,
      message: 'Order not found',
    }
    throw errorResponse
  }
  return updatedOrder
}

// order service for deleting single order
export async function deleteOrder(id: string): Promise<void> {
  const result = await OrderModel.findByIdAndDelete(id)
  if (!result) {
    const errorResponse = {
      success: false,
      message: 'Order not found',
    }
    throw errorResponse
  }
}

export const orderService = {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}
