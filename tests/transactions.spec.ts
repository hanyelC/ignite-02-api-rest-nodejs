import supertest from 'supertest'
import { afterAll, beforeAll, describe, test } from 'vitest'
import { app } from '../src/app'

describe('(e2e) /transactions', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('should be able to create a new transaction', async () => {
    await supertest(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
