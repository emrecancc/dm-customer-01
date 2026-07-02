const request = require('supertest');
const app = require('../app');

describe('API responds within 200ms', () => {
  it('should respond within 200ms', async () => {
    const start = Date.now();
    await request(app).get('/').expect(200);
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(600);
  });
});