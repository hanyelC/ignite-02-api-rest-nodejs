import 'dotenv/config'
import fastify from 'fastify'
import { env } from './env'
import { helloWorldRoute } from './routes/helloWorld'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(helloWorldRoute)
app.register(transactionRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on port!', env.PORT)
  })
