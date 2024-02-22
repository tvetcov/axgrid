import { ChartFieldValue, FieldDefinitionItem } from 'services/api.types.ts';

export interface ChartCellProps {
    value: ChartFieldValue;
    fieldDefinition: FieldDefinitionItem;
}
