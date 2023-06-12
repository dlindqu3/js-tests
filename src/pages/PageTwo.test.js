import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTwo from './PageTwo';
import userEvent from '@testing-library/user-event';


test('renders hello paragraph', () => {
  render(<PageTwo />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});

test('renders food header', () => {
  render(<PageTwo />);
  const element = screen.getByTestId('food'); 
  expect(element).toHaveTextContent('Pizza'); 
});

// check async data retrieval with mock service workers  
test('renders username of first user after async get request in useEffect', async () => {
  render(<PageTwo />);   
  // use findByTestId for async calls 
  const element = await screen.findByTestId("user-name");
  expect(element).toBeInTheDocument(); 
});

// check async data retrieval with mock service workers 
test("", async () => {
  const user = userEvent.setup(); 
  render(<PageTwo />); 
  await user.click(screen.getByRole('button', {name: /getUsers/i}));
  // FIX findByTestId, this isn't for async stuff 
  const element = await screen.findByTestId("user2-name");
  expect(element).toHaveTextContent("Ervin Howell"); 
});

