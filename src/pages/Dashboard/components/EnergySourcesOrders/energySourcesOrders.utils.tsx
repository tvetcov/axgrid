import { format } from 'date-fns';

import {
    ENERGY_SOURCE_ID,
    EnergySource,
    FieldDefinitions
} from 'services/api.types';
import { HeadCell } from 'components/DataTable/dataTable.types';
import ListCell from 'components/Cells/ListCell.component';
import TableCellFieldSwitch from 'components/FieldSwitch/TableCellSwitch';
import { DATE_FORMAT } from 'utils/constants';

export const getUniqueSourceNames = (sources: EnergySource[]) => {
    return [...new Set(sources.map(energySource => energySource.source))];
};

export const DEFAULT_COLUMNS: HeadCell<EnergySource>[] = [
    {
        id: 'status',
        label: 'Order Status',
        width: 120,
        cellRenderer: row => row.status
    },
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
        label: 'Min Purchase Quantity',
        width: 185,
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
                        value: format(row.paymentTerms.paymentDate, DATE_FORMAT)
                    }
                ]}
            />
        )
    }
];

export const getTableColumns = ({
    energySourceId,
    fieldDefinitions
}: {
    energySourceId: ENERGY_SOURCE_ID;
    fieldDefinitions: FieldDefinitions;
}): HeadCell<EnergySource>[] => {
    const sourceDefinitions = fieldDefinitions[energySourceId];

    const columns = sourceDefinitions.map(fieldDefinition => ({
        id: String(fieldDefinition.id),
        label: fieldDefinition.name,
        width: 170,
        cellRenderer: (row: EnergySource) => {
            const customField = row.customFields.find(
                field => field.id === fieldDefinition.id
            );

            return customField?.value ? (
                <TableCellFieldSwitch
                    value={customField?.value}
                    fieldDefinition={fieldDefinition}
                />
            ) : null;
        }
    }));

    return [...DEFAULT_COLUMNS, ...columns];
};
