import { Server } from 'http'
import mongoose, { ConnectOptions } from 'mongoose'
import path from 'path'
import app from './app'
import config from './config'

let server: Server

// database connection
const main = async () => {
  try {
    await mongoose.connect(config.db.host as string)

    server = app.listen(config.port, () => {
      console.log(`💚 Example app listening on port ${config.port}`)
    })

    console.log(`💚 Database connection successful`)
  } catch (error) {
    console.log('🔴 Something wrong here', error)
    process.exit(1)
  }
}

main()
