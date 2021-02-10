import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import App from 'components/App';

test('renders home text', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Google Tag Manager - Create React App/i);
  expect(linkElement).toBeInTheDocument();
});
