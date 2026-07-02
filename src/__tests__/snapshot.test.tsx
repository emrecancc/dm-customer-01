import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

// Mock the system date to a fixed value to make snapshots deterministic
beforeAll(() => {
  // Use Jest's modern fake timers to control the system time
  jest.useFakeTimers('modern');
  // Set the system time to a fixed date (YYYY-MM-DD)
  jest.setSystemTime(new Date('2024-01-14'));
});

afterAll(() => {
  // Restore real timers after tests complete
  jest.useRealTimers();
});

describe('Dashboard', () => {
  it('renders correctly', () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});