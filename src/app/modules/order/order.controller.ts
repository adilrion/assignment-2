import { RequestHandler } from "express"
import { orderService } from "./order.service"
import { IOrder } from "./order.interface"
import { ApiResponse } from "../../../shared/ApiResponse"


// controller for handling new order
const addOrder: RequestHandler = async (req, res): Promise<void> => {

  try {
    const order = req.body



    const result = await orderService.addOrder(order)
    ApiResponse<IOrder>(res, {
      statusCode: 200,
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message,
    })
  }
}


// controller for handling all orders retrieval
const getOrders: RequestHandler = async (req, res): Promise<void> => {
  try {

    const filter = req.query.email as string || ''
    const result = await orderService.getOrders(filter as string)
    ApiResponse<IOrder[]>(res, {
      statusCode: 200,
      success: true,
      message: filter
        ? `Orders fetched successfully for user email!`
        : 'Orders fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message,
    })
  }
}


// controller for handling single order retrieval
const getOrder: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const result = await orderService.getOrder(id)
    ApiResponse<IOrder>(res, {
      statusCode: 200,
      success: true,
      message: 'Order retrieved successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message,
    })
  }
}


// controller for handling single order update
const updateOrder: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const order = req.body
    const result = await orderService.updateOrder(id, order)
    ApiResponse<IOrder>(res, {
      statusCode: 200,
      success: true,
      message: 'Order updated successfully!',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message,
    })
  }
}

// controller for handling single order deletion
const deleteOrder: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    await orderService.deleteOrder(id)
    ApiResponse<IOrder>(res, {
      statusCode: 200,
      success: true,
      message: 'Order deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message,
    })
  }
}


export const orderController = {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
}