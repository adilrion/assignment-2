import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

// zod validation handler middleware
export const zodValidationHandler =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      console.log("🚀 ~ error:", error)
      res.status(400).json({
        success: false,
        message: error?.message,
      })
    }
  }
