const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3159);

describe('Server', () => {
  it('should respond to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => {
  server.close();
});