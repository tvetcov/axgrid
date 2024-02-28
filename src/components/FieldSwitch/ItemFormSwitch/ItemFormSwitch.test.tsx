import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import ItemFormSwitch from './ItemFormSwitch.component';

describe('ItemFormSwitch component', () => {
    it('renders error alert when incorrect type provided', async () => {
        // @ts-expect-error not providing any more props on purpose
        render(<ItemFormSwitch type="non-existant-type" />);

        expect(screen.getByText('Error:')).toBeInTheDocument();
    });
});
