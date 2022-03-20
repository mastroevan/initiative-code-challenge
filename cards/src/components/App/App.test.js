import { render, screen } from '@testing-library/react';
import App from './App';

test('app is rendered correctly at inital launch', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
