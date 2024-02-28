import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import IconMenu from './IconMenu.component';

describe('IconMenu component', () => {
    it('should render menu', () => {
        const rowActions = [
            {
                getIsDisabled: () => false,
                onClick: () => {},
                icon: <div />,
                label: 'test'
            }
        ];

        const row = {
            id: 1
        };

        render(<IconMenu rowActions={rowActions} row={row} />);

        expect(screen.queryByLabelText('menu')).toBeInTheDocument();
    });

    it('does not render menu when no actions and no tow provided', () => {
        render(<IconMenu rowActions={[]} row={{}} />);

        expect(screen.queryByLabelText('menu')).not.toBeInTheDocument();
    });
});
