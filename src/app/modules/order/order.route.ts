import express from 'express'
import { orderController } from './order.controller'
import { zodValidationHandler } from '../../middleware/zodValidationHandler'
import { orderValidation } from './order.validation'

const orderRouter = express.Router()

orderRouter.post('/', zodValidationHandler(orderValidation), orderController.addOrder)
orderRouter.get('/', orderController.getOrders)
orderRouter.get('/:id', orderController.getOrder)
orderRouter.put('/:id',  orderController.updateOrder)
orderRouter.delete('/:id', orderController.deleteOrder)



export default orderRouter