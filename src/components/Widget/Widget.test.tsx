import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Widget from './Widget.component';

describe('Modal', () => {
    it('should render Widget, its content and its title', () => {
        render(
            <Widget title="Title">
                <div>Content</div>
            </Widget>
        );

        expect(screen.getByTestId('widget')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
