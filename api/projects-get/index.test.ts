import httpTrigger from './index'
const context = require('../test/defaultContext')

describe('GET products/search', () => {
  it('should return something', async () => {
    const req = {
      query: { name: '' }
    }

    await httpTrigger(context, req)

    expect(context.log.mock.calls.length).toBe(1)
    expect(context.res.body).toBeTruthy()
  })
})