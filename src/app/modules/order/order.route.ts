import express from 'express'
import { orderController } from './order.controller'

const orderRouter = express.Router()

orderRouter.post('/', orderController.addOrder)
orderRouter.get('/', orderController.getOrders)
orderRouter.get('/:id', orderController.getOrder)
orderRouter.put('/:id', orderController.updateOrder)
orderRouter.delete('/:id', orderController.deleteOrder)



export default orderRouter