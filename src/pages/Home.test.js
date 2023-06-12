import { render, screen } from '@testing-library/react';
import Home from './Home';
import userEvent from '@testing-library/user-event'

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


// this async test works with no __mocks__ folder 
test('renders title of first product after async get request in useEffect', async () => {
  render(<Home />); 
  // use findByTestId for async calls 
  const element = await screen.findByTestId("product-title");
  expect(element).toBeInTheDocument(); 
});


test('renders title of second product after async get request on click', async () => {
  // use findByTestId for async calls 
  const user = userEvent.setup()
  render(<Home />); 
  await user.click(screen.getByRole('button', {name: /GetAllStoreData/i}))
  const element = await screen.findByTestId("product2-title");
  expect(element).toBeInTheDocument(); 
});
