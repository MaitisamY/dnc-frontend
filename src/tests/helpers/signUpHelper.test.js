import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'; 
import { useSignUp } from '../../helpers/signUpHelper.js'

// Mock axios post request
jest.mock('axios');

describe('useSignUp', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Reset mocked functions between tests
    });

    test('should handle form submission successfully', async () => {
        // Mock successful axios post request
        axios.post.mockResolvedValueOnce({ data: { message: 'User created successfully' } });

        const { result, waitForNextUpdate } = renderHook(() => useSignUp());

        // Simulate form submission
        await act(async () => {
            result.current.handleSubmit({ preventDefault: jest.fn() });
            await waitForNextUpdate();
        });

        // Check if serverResponse is set
        expect(result.current.serverResponse).toEqual({ status: 200, message: 'User created successfully' });
    });

    // Add more test cases for different scenarios (e.g., error handling, validation, etc.)
});
