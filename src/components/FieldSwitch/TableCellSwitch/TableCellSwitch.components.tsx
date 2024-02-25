import { lazy } from 'react';

const LinkCell = lazy(() => import('components/Cells/LinkCell'));
const DateTimeCell = lazy(
    () => import('components/Cells/DateTimeCell.component')
);
const ChartCell = lazy(() => import('components/Cells/ChartCell'));

import {
    CustomFieldValue,
    FIELD_SUBTYPES,
    FIELD_TYPES,
    FieldDefinitionItem
} from 'services/api.types';

interface FieldSwitchCellProps {
    value: CustomFieldValue;
    fieldDefinition: FieldDefinitionItem;
}

const FieldSwitchCell = ({ value, fieldDefinition }: FieldSwitchCellProps) => {
    const { type, subType } = fieldDefinition;

    switch (type) {
        case FIELD_TYPES.TextFieldData:
            if (typeof value !== 'string') {
                return null;
            }

            if (subType === FIELD_SUBTYPES.link) {
                return <LinkCell href={value} label={fieldDefinition.name} />;
            }
            if (subType === FIELD_SUBTYPES.dateTime) {
                return <DateTimeCell value={value} />;
            }
            if (subType === FIELD_SUBTYPES.geolocation) {
                const link = `https://www.google.com/maps/place/${value}`;

                return <LinkCell href={link} label="Open Maps" />;
            }
            return <div>{value}</div>;
        case FIELD_TYPES.ChartFieldData:
            if (typeof value !== 'object') {
                return null;
            }

            return (
                <ChartCell value={value} fieldDefinition={fieldDefinition} />
            );
        default:
            return null;
    }
};

export default FieldSwitchCell;
