import request from 'supertest';
import app from '../app';

describe('API timing', () => {
  it('responds within 850ms', async () => {
    const start = Date.now();
    await request(app).get('/api');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(850);
  });
});