import { FastifyInstance } from 'fastify'

export async function helloWorldRoute(app: FastifyInstance) {
  app.get('/', async () => {
    return 'Hello World'
  })
}
