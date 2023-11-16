import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, React!/i);
  expect(linkElement).toBeInTheDocument();
});