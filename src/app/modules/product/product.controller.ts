import { RequestHandler } from 'express'
import { IProduct } from './product.interface'
import { productService } from './product.services'
import { ApiResponse } from '../../../shared/ApiResponse'

// product controller for handling new product creation
const create_product: RequestHandler = async (req, res): Promise<void> => {
  try {
    const product = req.body
    const result = await productService.save_product(product)
      ApiResponse<IProduct>(res, {
        statusCode: 200,
        success: true,
        message: 'Product created successfully!',
        body: result,
      })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message
    })
  }
}


// product controller for handling all product retrieval
const get_products: RequestHandler = async (req, res): Promise<void> => {
  try {
    const result = await productService.get_products()
    ApiResponse<IProduct[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Products retrieved successfully!',
      body: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message
    })
  }
}


// product controller for handling single product retrieval
const get_product: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const result = await productService.get_product(id)
    ApiResponse<IProduct>(res, {
      statusCode: 200,
      success: true,
      message: 'Product retrieved successfully!',
      body: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message
    })
  }
}


// product controller for handling single product update
const update_product: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const product = req.body
    const result = await productService.update_product(id, product)
    ApiResponse<IProduct>(res, {
      statusCode: 200,
      success: true,
      message: 'Product updated successfully!',
      body: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message
    })
  }
}


// product controller for handling single product deletion
const delete_product: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const result = await productService.delete_product(id)
    ApiResponse<IProduct>(res, {
      statusCode: 200,
      success: true,
      message: 'Product deleted successfully!',
      body: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      // @ts-ignore
      message: error?.message
    })
  }
}



export const productController = {
 create_product,
 get_products,
 get_product,
 update_product,
 delete_product,
}
