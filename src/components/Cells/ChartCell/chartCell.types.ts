import { ChartFieldValue, FieldDefinitionItem } from 'services/api.types';

export interface ChartCellProps {
    value: ChartFieldValue;
    fieldDefinition: FieldDefinitionItem;
}
