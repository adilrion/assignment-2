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
      body: result,
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
    const result = await orderService.getOrders()
    ApiResponse<IOrder[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Orders retrieved successfully!',
      body: result,
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
      body: result,
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
      body: result,
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
      body: null,
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