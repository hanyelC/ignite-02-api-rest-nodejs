import 'dotenv/config'
import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on port!', 3333)
  })
