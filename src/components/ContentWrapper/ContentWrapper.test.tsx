import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ContentWrapper from './ContentWrapper.component';

describe('ContentWrapper', () => {
    it('renders correctly', () => {
        render(
            <ContentWrapper>
                <div>Content</div>
            </ContentWrapper>
        );

        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
