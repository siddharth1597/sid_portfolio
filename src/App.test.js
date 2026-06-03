import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio name', () => {
  render(<App />);
  const nameElement = screen.getByRole('heading', { level: 1, name: /Siddharth Rastogi/i });
  expect(nameElement).toBeInTheDocument();
});
