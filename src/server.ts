import { Server } from 'http'
import mongoose, { ConnectOptions } from 'mongoose'
import app from './app'
import config from './config'

let server: Server

// database connection
const main = async () => {
  try {
    await mongoose.connect(config.db.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)

    server = app.listen(config.port, () => {
      console.log(`💚 Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('🔴 Something wrong here', error)
    process.exit(1)
  }
}



main()

