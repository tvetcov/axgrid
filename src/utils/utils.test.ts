import { describe, expect, test } from 'vitest';

import { formatCurrency } from './utils';
import { DATE_FORMAT } from './constants';

describe('utils', () => {
    test('formatCurrency', () => {
        expect(formatCurrency(100)).toBe('$100.00');
    });

    test('DATE_FORMAT', () => {
        expect(DATE_FORMAT).toBe('dd/MM/yyyy');
    });
});
