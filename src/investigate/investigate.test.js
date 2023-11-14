import { render, screen } from '@testing-library/react';
import Investigateapp from './Investigateapp';

test('renders learn react link', () => {
  render(<Investigateapp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
