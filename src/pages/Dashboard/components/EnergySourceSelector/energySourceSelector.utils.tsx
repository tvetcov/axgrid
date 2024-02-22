import { EnergySource, FieldDefinitions } from 'services/api.types';
import { HeadCell } from 'components/DataTable/dataTable.types.ts';

import ListCell from 'components/Cells/ListCell.component.tsx';

export const getUniqueSourceNames = (sources: EnergySource[]) => {
    return [...new Set(sources.map(energySource => energySource.source))];
};

export const DEFAULT_COLUMNS: HeadCell<EnergySource>[] = [
    {
        id: 'source',
        label: 'Source',
        width: 75,
        cellRenderer: row => row.source
    },
    {
        id: 'price',
        label: 'Price',
        width: 65,
        cellRenderer: row => row.price
    },
    {
        id: 'minimumPurchaseQuantity',
        label: 'Minimum Purchase Quantity',
        width: 225,
        cellRenderer: row => row.minimumPurchaseQuantity
    },
    {
        id: 'contractTerms',
        label: 'Contract terms',
        width: 150,
        cellRenderer: row => (
            <ListCell
                list={[
                    {
                        label: 'Duration',
                        value: row.contractTerms.duration
                    },
                    {
                        label: 'Penalty',
                        value: row.contractTerms.penalty
                    },
                    {
                        label: 'Legal Condition',
                        value: row.contractTerms.legalConditions
                    }
                ]}
            />
        )
    },
    {
        id: 'paymentTerms',
        label: 'Payment terms',
        width: 150,
        cellRenderer: row => (
            <ListCell
                list={[
                    {
                        label: 'Payment method',
                        value: row.paymentTerms.paymentMethod
                    },
                    {
                        label: 'Payment date',
                        value: row.paymentTerms.paymentDate
                    }
                ]}
            />
        )
    }
];

export const getTableColumns = (
    filteredEnergySource: EnergySource,
    fieldDefinitions: FieldDefinitions
): HeadCell<EnergySource>[] => {
    const columns = filteredEnergySource.customFields.map(customField => {
        const fieldDefinition = fieldDefinitions[
            filteredEnergySource.source
        ].find(definition => definition.id === customField.id);

        return {
            id: String(customField.id),
            label: fieldDefinition?.name,
            width: 170,
            cellRenderer: (row: EnergySource) => {
                const value = row.customFields.find(
                    field => field.id === fieldDefinition?.id
                )?.value;

                return Array.isArray(value)
                    ? value.map(val => val.label).join(', ')
                    : value;
            }
        } as HeadCell<EnergySource>;
    });

    return [...DEFAULT_COLUMNS, ...columns];
};
