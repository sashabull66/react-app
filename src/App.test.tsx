import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render start page correct', () => {
  render(<App />);

  expect(screen.getByText('This is test React App Page')).toBeInTheDocument();
});

