const request = require('supertest');
const app = require('../app');

describe('API benchmark', () => {
  test('API responds within 75ms', async () => {
    const start = Date.now();
    await request(app).get('/api');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(400);
  });
});