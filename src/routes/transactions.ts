import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      amount: z.number(),
      title: z.string(),
      type: z.enum(['credit', 'debit']),
    })

    const { amount, title, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      amount: type === 'credit' ? amount : amount * -1,
      title,
    })

    return reply.status(201).send()
  })

  app.get('/', async () => {
    const transactions = await knex('transactions').select('*')

    return transactions
  })
}
