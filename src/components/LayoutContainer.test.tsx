import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/test-utils';
import { screen} from '@testing-library/react'

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.

  // history.pushState = jest.fn();
  render(<LayoutContainer />);

  expect(screen.getByRole('heading').textContent).toBe('Welcome!');
  
  const linkButton = screen.getByRole('link');
  userEvent.click(linkButton);

  

  expect(screen.getByRole('heading').textContent).toBe('About ');
});
