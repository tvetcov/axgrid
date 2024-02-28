import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import {
    FieldDefinitionItem,
    FIELD_TYPES,
    FIELD_SUBTYPES,
    ChartFieldValue,
    ORDER_STATUS
} from 'services/api.types';

import { format } from 'date-fns';
import { DATE_FORMAT } from 'utils/constants.ts';
import ChartCell from './ChartCell';
import LinkCell from './LinkCell';
import StatusCell from './StatusCell';
import DateTimeCell from './DateTimeCell.component';
import ListCell from './ListCell.component';

describe('Cells', () => {
    it('renders the Chart cell component', () => {
        const fieldDefinition: FieldDefinitionItem = {
            id: 3,
            name: 'Output Prediction',
            type: 'ChartFieldData' as FIELD_TYPES,
            subType: 'line' as FIELD_SUBTYPES
        };

        const data: ChartFieldValue = [
            {
                label: 'January',
                value: 4.5
            },
            {
                label: 'February',
                value: 5.2
            },
            {
                label: 'March',
                value: 6.1
            },
            {
                label: 'April',
                value: 7.3
            },
            {
                label: 'May',
                value: 8.2
            },
            {
                label: 'June',
                value: 9.1
            },
            {
                label: 'July',
                value: 9.5
            },
            {
                label: 'August',
                value: 8.9
            },
            {
                label: 'September',
                value: 7.8
            },
            {
                label: 'October',
                value: 6.5
            },
            {
                label: 'November',
                value: 5.1
            },
            {
                label: 'December',
                value: 4.3
            }
        ];

        render(<ChartCell fieldDefinition={fieldDefinition} value={data} />);

        expect(screen.getByText('Chart')).toBeInTheDocument();
    });

    it('renders the Link cell component', () => {
        render(<LinkCell href={'localhost'} label={'Link'} />);

        expect(screen.getByText('Link')).toBeInTheDocument();
    });

    it('renders the Status cell component', () => {
        render(<StatusCell status={ORDER_STATUS.Open} />);

        expect(screen.getByText(ORDER_STATUS.Open)).toBeInTheDocument();
    });

    it('renders the DateTime cell component', () => {
        const date = new Date();
        const formattedDate = format(new Date(date), DATE_FORMAT);
        render(<DateTimeCell value={date.toISOString()} />);

        expect(screen.getByText(formattedDate)).toBeInTheDocument();
    });

    it('renders the ListCell cell component', () => {
        const list = [{ label: 'test', value: 'value' }];

        render(<ListCell list={list} />);

        expect(screen.getByText('value')).toBeInTheDocument();
    });
});
