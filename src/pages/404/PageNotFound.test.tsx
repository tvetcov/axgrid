import { describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { TestRouter } from 'tests/test.utils';
import PageNotFound from './PageNotFound.component';

describe('PageNotFound', () => {
    it('should render the PageNotFound page', async () => {
        render(<PageNotFound />, { wrapper: TestRouter });

        expect(
            await waitFor(() => screen.findByText('404: Page Not Found'))
        ).toBeInTheDocument();
    });
});
