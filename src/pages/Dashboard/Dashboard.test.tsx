import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { TestRouter } from 'tests/test.utils.tsx';
import Home from './Home.component';

describe('Home page', () => {
    it('should render the Home page', async () => {
        render(<Home />, { wrapper: TestRouter });

        expect(await waitFor(() => screen.findByText('Login'))).toBeInTheDocument();
    });
});
