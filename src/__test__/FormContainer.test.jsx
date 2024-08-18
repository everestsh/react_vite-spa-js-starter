// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { act } from 'react'; // Import act from react
import { describe, it, test, vi, expect, afterEach } from 'vitest';
import userEvent from "@testing-library/user-event";
import { render, waitFor } from '@testing-library/react';
import { submitLogin as mockSubmitLogin } from "../api";
import FormContainer from "../../src/components/LoginComponent/LoginContainer";

vi.mock("../api");

afterEach(() => {
    vi.clearAllMocks();
});
describe('App Component', () => {
    // it('renders welcome message', () => {
    //     render(<App />);
    //
    //     screen.debug(); // This will log the rendered HTML to the console
    //     const welcomeElement = screen.getByText(/FormComponenter 1/i);
    //     expect(welcomeElement).toBeInTheDocument();
    // });
    it("[1] button responds to click handler", async () => {
        const fakeUser = {
            username: "test@email.com",
            password: "testing123",
        };

        mockSubmitLogin.mockResolvedValueOnce();
        const { getByText, getByLabelText } = render(<FormContainer />);
        const button = getByText(/click/i);
        const emailInput = getByLabelText(/email/i);
        const passwordInput = getByLabelText(/password/i);

        await userEvent.type(emailInput, fakeUser.username);
        await userEvent.type(passwordInput, fakeUser.password);

        expect(button).not.toBeDisabled();

        userEvent.click(button);
        await waitFor(() => {
            expect(button).toBeDisabled();
        });

        expect(mockSubmitLogin).toHaveBeenCalledTimes(1);
        expect(mockSubmitLogin).toHaveBeenCalledWith({
            username: fakeUser.username,
            password: fakeUser.password,
        });
    });
});