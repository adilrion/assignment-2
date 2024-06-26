import { z } from 'zod'
// zod validation for product schema
export const productValidation = z.object({
  body: z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    price: z.number().min(1),
    category: z.string().min(3).max(255),
    tags: z.array(z.string()).min(1),
    variants: z
      .array(
        z.object({
          type: z.string().min(3).max(255),
          value: z.string().min(3).max(255),
        }),
      )
      .min(1),
    inventory: z.object({
      quantity: z.number().optional(),
      inStock: z.boolean().optional(),
    }),
  }),
})

export const productUpdateValidation = z.object({
  body: z
    .object({
      name: z.string().min(3).max(255).optional(),
      description: z.string().min(3).max(255).optional(),
      price: z.number().min(1).optional(),
      category: z.string().min(3).max(255).optional(),
      tags: z.array(z.string()).min(1).optional(),
      variants: z
        .array(
          z.object({
            type: z.string().min(3).max(255),
            value: z.string().min(3).max(255),
          }),
        )
        .min(1)
        .optional(),
      inventory: z.object({
        quantity: z.number().optional(),
        inStock: z.boolean().optional(),
      }),
    })
    .partial(),
})
