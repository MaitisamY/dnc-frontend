import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'
import { useScrubSection } from '../../helpers/scrubSection.js'

// Mock axios post request
jest.mock('axios');

describe('useScrubSection', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Reset mocked functions between tests
    });

    test('should handle form submission successfully', async () => {
        // Mock successful axios post request
        axios.post.mockResolvedValueOnce({ data: { message: 'Data scrubbed successfully' } });

        const { result, waitForNextUpdate } = renderHook(() => useScrubSection());

        // Set necessary state values (e.g., fileName, column, etc.)
        act(() => {
            result.current.setFileName('example.csv');
            result.current.setColumn('email');
            // Set other necessary state values if needed
        });

        // Simulate form submission
        await act(async () => {
            result.current.handleSubmit({ preventDefault: jest.fn() });
            await waitForNextUpdate();
        });

        // Check if loading state is set to false after submission
        expect(result.current.isLoading).toBe(false);
        // Check if serverResponse is set
        expect(result.current.errors).toEqual({});
    });

    // Add more test cases for different scenarios (e.g., error handling, validation, etc.)
});
