import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FIELD_SUBTYPES, FIELD_TYPES } from 'services/api.types';
import TableCellSwitch from './TableCellSwitch.components';

describe('TableCellSwitch component', () => {
    it('renders text field Geo data cell correctly', async () => {
        const fieldDefinition = {
            id: 2,
            name: 'Location',
            type: 'TextFieldData' as FIELD_TYPES,
            subType: 'geolocation' as FIELD_SUBTYPES
        };

        render(
            <TableCellSwitch
                fieldDefinition={fieldDefinition}
                value={'40°27\'06.7"N 3°41\'29.7"W'}
            />
        );

        expect(await screen.findByText('Open Maps')).toBeInTheDocument();
    });

    it('renders text field Link cell correctly', async () => {
        const fieldDefinition = {
            id: 1,
            name: 'Link',
            type: 'TextFieldData' as FIELD_TYPES,
            subType: 'link' as FIELD_SUBTYPES
        };

        render(
            <TableCellSwitch
                fieldDefinition={fieldDefinition}
                value={'https://www.google.com'}
            />
        );

        expect(await screen.findByText('Link')).toBeInTheDocument();
    });

    it('renders text field DateTime cell correctly', async () => {
        const fieldDefinition = {
            id: 3,
            name: 'Date',
            type: 'TextFieldData' as FIELD_TYPES,
            subType: 'dateTime' as FIELD_SUBTYPES
        };

        render(
            <TableCellSwitch
                fieldDefinition={fieldDefinition}
                value={'2021-10-10T10:10:10Z'}
            />
        );

        expect(await screen.findByText('10/10/2021')).toBeInTheDocument();
    });

    it('renders chart field cell correctly', async () => {
        const fieldDefinition = {
            id: 4,
            name: 'Chart',
            type: 'ChartFieldData' as FIELD_TYPES,
            subType: 'line' as FIELD_SUBTYPES
        };

        render(
            <TableCellSwitch
                fieldDefinition={fieldDefinition}
                value={[
                    {
                        label: 'January',
                        value: 4.5
                    }
                ]}
            />
        );

        expect(await screen.findByText('Chart')).toBeInTheDocument();
    });
});
