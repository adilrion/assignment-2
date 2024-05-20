import express from 'express'
import productRouter from '../modules/product/product.route'

const applicationRouter = express.Router()

const allRouters = [
  {
    path: '/products',
    route: productRouter,
  },
]

allRouters?.forEach(route => {
  applicationRouter.use(route?.path, route?.route)
})

export default applicationRouter
