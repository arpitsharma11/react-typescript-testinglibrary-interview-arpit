import React from 'react';
import { render, screen } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly
  render(<Home path="/" />);

  expect(screen.getByRole('heading').textContent).toBe('Welcome!');
  expect(screen.getByText('Go to about').closest('a')?.getAttribute('href')).toBe('/about');

  expect(screen.getByText('Looks good').textContent).toBe('Looks good')


});
