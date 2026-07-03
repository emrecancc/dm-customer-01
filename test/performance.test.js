const request = require('supertest');
const app = require('../app');

describe('API performance', () => {
  it('responds within 1250ms', async () => {
    const start = Date.now();
    await request(app).get('/some-endpoint');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1250);
  });
});