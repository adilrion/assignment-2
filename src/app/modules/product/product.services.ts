import { IProduct } from './product.interface'
import { ProductModel } from './product.model'

// save new product
const save_product = async (product: IProduct): Promise<IProduct> => {
  const result = await ProductModel.create(product)
  if (!result) throw new Error('Product not saved')
  return result
}


// get all product
const get_products = async (): Promise<IProduct[]> => {
  const result = await ProductModel.find()
  if (!result) throw new Error('Product not found')
  return result
}

// get single product
const get_product = async (id: string): Promise<IProduct> => {
  const result = await ProductModel.findById(id);
  if (!result) throw new Error('Product not found')
  return result;
}


// update single product 
const update_product = async (id: string, product: IProduct): Promise<IProduct> => {
  const result = await ProductModel.findByIdAndUpdate(id, product, { new: true });
  if (!result) throw new Error('Product not updated')
  return result;
}

//  delete single product
const delete_product = async (id: string): Promise<IProduct> => {
  const result = await ProductModel.findByIdAndDelete(id);
  if (!result) throw new Error('Product not deleted')
  return result;
}

export const productService = {
  save_product,
  get_products,
  get_product,
  update_product,
  delete_product
  
}
