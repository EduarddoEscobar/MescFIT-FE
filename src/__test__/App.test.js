import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../Components/App';

describe('App is working as intended', () => {
  test('App renders without errors', () => {
    render(<App />);
  });

  test('App has 8 links', () => {
    render(<App />);
    const links = screen.queryAllByTestId(/header-link/i);
    expect(links.length).toBe(8);
  });
});
