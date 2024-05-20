import express from 'express'
import productRouter from '../modules/product/product.route'
import orderRouter from '../modules/order/order.route'

const applicationRouter = express.Router()

const allRouters = [
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/orders',
    route: orderRouter
  }
]

allRouters?.forEach(route => {
  applicationRouter.use(route?.path, route?.route)
})

export default applicationRouter
