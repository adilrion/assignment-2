
import { Response } from 'express'



export type IResponse<T> = {
  statusCode: number
  success: boolean
  message?: string
  data: T | null
}


export const ApiResponse = <T>(res: Response, data: IResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data?.message || null,
    data: data?.data || null,
  })
}
