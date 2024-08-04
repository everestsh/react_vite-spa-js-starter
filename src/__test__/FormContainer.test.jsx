// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { act } from 'react'; // Import act from react
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../components/FormComponent/FormContainer.jsx';

describe('App Component', () => {
    it('renders welcome message', () => {
        render(<App />);

        screen.debug(); // This will log the rendered HTML to the console
        const welcomeElement = screen.getByText(/FormComponenter 1/i);
        expect(welcomeElement).toBeInTheDocument();
    });
});