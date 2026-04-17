// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WavesRide title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WavesRide/i);
    expect(titleElement).toBeInTheDocument();
});
