import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Anthony Yvon Dumas', () => {
  render(<App />);
  const linkElement = screen.getByText(/Anthony Yvon Dumas/i);
  expect(linkElement).toBeInTheDocument();
});
