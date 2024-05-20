import { z } from 'zod'

const orderValidation = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    productId: z.string().min(1, { message: 'Product ID is required' }),
    price: z.number().min(1, { message: 'Price must be greater than 0' }),
    quantity: z.number().min(1, { message: 'Quantity must be greater than 0' }),
  }),
})
