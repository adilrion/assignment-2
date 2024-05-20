import cookeParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import applicationRouter from './app/routes'

const app: Application = express()

app.use(cookeParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/', applicationRouter)

// welcome route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// api not fount handler
app.use((req: Request, res: Response) => {
  res.status(404).send('404: Page not found')
})

export default app
