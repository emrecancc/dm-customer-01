import { apiCall } from '../src/api';

describe('Latency', () => {
  it('API responds within 500ms', async () => {
    const start = Date.now();
    await apiCall();
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(500);
  });
});