import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AreaChart from './Area';
import LineChart from './Line';

describe('Charts', () => {
    beforeAll(() => {
        global.ResizeObserver = class ResizeObserver {
            observe() {
                // do nothing
            }

            unobserve() {
                // do nothing
            }

            disconnect() {
                // do nothing
            }
        };
    });

    it('should render Area chart', () => {
        const data = [
            {
                label: 'Mon',
                value: ['05:16:36', '21:19:47']
            }
        ];

        render(<AreaChart data={data} />);

        expect(screen.getByTestId('area-chart')).toBeInTheDocument();
    });

    it('should render Line chart', () => {
        const data = [
            {
                label: 'January',
                value: 4.5
            }
        ];

        render(<LineChart data={data} />);

        expect(screen.getByTestId('line-chart')).toBeInTheDocument();
    });
});
