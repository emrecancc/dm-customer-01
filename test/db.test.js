const { User } = require('../src/models');

describe('User model', () => {
  beforeEach(() => User.destroy({ where: {}, truncate: true }));

  test('creates a user', async () => {
    const user = await User.create({ name: 'John' });
    expect(user).toBeDefined();
  });

  test('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});