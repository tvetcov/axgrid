import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { TestRouter } from 'tests/test.utils';
import TopBar from './TopBar.component';

describe('Home page', () => {
    it('should render the TopBar', async () => {
        render(<TopBar />, { wrapper: TestRouter });

        expect(
            await waitFor(() => screen.findByText('AxGrid'))
        ).toBeInTheDocument();
    });
});
