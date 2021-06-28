import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  render(<About path="/about" />)

  expect(screen.getByRole('heading').textContent).toBe('About Page');
  expect(screen.getByRole('button').textContent).toBe('Increment');
  expect(screen.getByText(/Current Count/i).textContent).toBe('Current Count: 0');
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  render(<About path="/about" />)


  expect(screen.getByText(/Current Count/i).textContent).toBe('Current Count: 0');

  userEvent.click(screen.getByText('Increment'));
  expect(screen.getByText(/Current Count/i).textContent).toBe('Current Count: 1');

  userEvent.click(screen.getByText('Increment'));
  userEvent.click(screen.getByText('Increment'));
  expect(screen.getByText(/Current Count/i).textContent).toBe('Current Count: 3');
});
