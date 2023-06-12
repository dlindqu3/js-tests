import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello paragraph', () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
