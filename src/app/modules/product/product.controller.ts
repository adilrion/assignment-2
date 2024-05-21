import { RequestHandler } from 'express'
import { ApiResponse } from '../../../shared/ApiResponse'
import { IProduct } from './product.interface'
import { productService } from './product.services'

// product controller for handling new product creation
const createProduct: RequestHandler = async (req, res): Promise<void> => {
  try {
    const product = req.body
    
    const result = await productService.saveProduct(product)
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
      message: error?.message,
    })
  }
}

// product controller for handling all product retrieval
const getProducts: RequestHandler = async (req, res): Promise<void> => {
  try {
        const searchTerm = req.query.searchTerm as string || ''
    const result = await productService.getProducts(searchTerm)
    ApiResponse<IProduct[]>(res, {
      statusCode: 200,
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
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

// product controller for handling single product retrieval
const getProduct: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const result = await productService.getProduct(id)
    ApiResponse<IProduct>(res, {
      statusCode: 200,
      success: true,
      message: 'Product fetched successfully!',
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

// product controller for handling single product update
const updateProduct: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    const product = req.body
    const result = await productService.updateProduct(id, product)
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
      message: error?.message,
    })
  }
}

// product controller for handling single product deletion
const deleteProduct: RequestHandler = async (req, res): Promise<void> => {
  try {
    const id = req.params.id
    await productService.deleteProduct(id)
    ApiResponse<null>(res, {
      statusCode: 200,
      success: true,
      message: 'Product deleted successfully!',
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

export const productController = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
}
