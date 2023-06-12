import { render, screen } from '@testing-library/react';
import Home from './Home';
// import userEvent from '@testing-library/user-event';

test('renders hello paragraph', () => {
  render(<Home />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

test('renders food header', () => {
  render(<Home />);
  const element = screen.getByTestId('food'); 
  expect(element).toHaveTextContent('Pizza'); 
});


// this async test works with no __mocks__ folder and mock service worker (msw)
test('renders username of first user after async get request in useEffect', async () => {
  render(<Home />);   
  // use findByTestId for async calls 
  const element = await screen.findByTestId("user-name");
  expect(element).toBeInTheDocument(); 
});
