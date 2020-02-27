import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "doctor" word', () => {
  const { getByText } = render(<App />);
  const doctor = getByText(/doctor/i);
  expect(doctor).toBeInTheDocument();
});
