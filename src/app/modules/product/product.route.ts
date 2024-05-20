import express from 'express'
import { zodValidationHandler } from '../../middleware/zodValidationHandler'
import { productController } from './product.controller'
import { productUpdateValidation, productValidation } from './product.validation'

const productRouter = express.Router()

productRouter.post(
  '/',
  zodValidationHandler(productValidation),
  productController.createProduct,
)

productRouter.get('/', productController.getProducts)

productRouter.get('/:id', productController.getProduct)

productRouter.put('/:id', zodValidationHandler(productUpdateValidation), productController.updateProduct)

productRouter.delete('/:id', productController.deleteProduct)




export default productRouter
