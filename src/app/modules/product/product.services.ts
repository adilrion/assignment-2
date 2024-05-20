import { IProduct } from './product.interface'
import { ProductModel } from './product.model'

// save new product
const saveProduct = async (product: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(product)
  if (!result) throw new Error('Product not saved')
  return result
}


// get all product
const getProducts = async (): Promise<IProduct[]> => {
  const result = await ProductModel.find()
  if (!result) throw new Error('Product not found')
  return result
}

// get single product
const getProduct = async (id: string): Promise<IProduct> => {
  const result = await ProductModel.findById(id);
  if (!result) throw new Error('Product not found')
  return result;
}


// update single product 
const updateProduct = async (id: string, product: IProduct): Promise<IProduct> => {
  const result = await ProductModel.findByIdAndUpdate(id, product, { new: true });
  if (!result) throw new Error('Product not updated')
  return result;
}

//  delete single product
const deleteProduct = async (id: string): Promise<IProduct> => {
  const result = await ProductModel.findByIdAndDelete(id);
  if (!result) throw new Error('Product not deleted')
  return result;
}

export const productService = {
  saveProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
}