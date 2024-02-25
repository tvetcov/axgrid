import InputAdornment from '@mui/material/InputAdornment';

import { INPUT_FIELD_TYPES } from 'components/Fields/field.types';
import {
    FIELD_SUBTYPES,
    FIELD_TYPES,
    FieldDefinitionItem
} from 'services/api.types';
import { FormFieldRecord } from './energySourceForm.types';

export const defaultFormValues = {
    price: '',
    minimumPurchaseQuantity: '',
    contractTerms: {
        duration: '',
        penalty: '',
        legalConditions: ''
    },
    paymentTerms: {
        paymentMethod: '',
        paymentDate: ''
    }
};

export const getDefaultEnergyFormFields = (
    customFields: FormFieldRecord[]
): Record<string, FormFieldRecord[]> => {
    return {
        'Price info:': [
            {
                name: 'price',
                label: 'Price',
                type: INPUT_FIELD_TYPES.NUMBER,
                InputProps: {
                    startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                    )
                }
            },
            {
                name: 'minimumPurchaseQuantity',
                label: 'Min Purchase Quantity',
                type: INPUT_FIELD_TYPES.NUMBER
            }
        ],
        'Contract Terms:': [
            {
                name: 'contractTerms.duration',
                label: 'Duration',
                type: INPUT_FIELD_TYPES.TEXT
            },
            {
                name: 'contractTerms.penalty',
                label: 'Penalty',
                type: INPUT_FIELD_TYPES.TEXT
            },
            {
                name: 'contractTerms.legalConditions',
                label: 'Legal conditions',
                type: INPUT_FIELD_TYPES.TEXT
            }
        ],
        'Payment Terms:': [
            {
                name: 'paymentTerms.paymentMethod',
                label: 'Payment method',
                type: INPUT_FIELD_TYPES.TEXT
            },
            {
                name: 'paymentTerms.paymentDate',
                label: 'Payment date',
                type: INPUT_FIELD_TYPES.DATE
            }
        ],
        'Custom Fields:': customFields || []
    };
};

export const getCustomEnergyFormFields = (
    sourceDefinitions: FieldDefinitionItem[]
): FormFieldRecord[] => {
    const fields = sourceDefinitions.map(
        (fieldDefinition: FieldDefinitionItem) => {
            switch (fieldDefinition.type) {
                case FIELD_TYPES.TextFieldData: {
                    if (fieldDefinition.subType === FIELD_SUBTYPES.dateTime) {
                        return {
                            name: String(fieldDefinition.id),
                            label: fieldDefinition.name,
                            type: INPUT_FIELD_TYPES.DATE
                        };
                    }

                    return {
                        name: String(fieldDefinition.id),
                        label: fieldDefinition.name,
                        type: INPUT_FIELD_TYPES.TEXT
                    };
                }
                case FIELD_TYPES.ChartFieldData: {
                    return {
                        name: String(fieldDefinition.id),
                        label: fieldDefinition.name,
                        type: INPUT_FIELD_TYPES.ARRAY
                    };
                }
                default: {
                    return {
                        name: String(fieldDefinition.id),
                        label: fieldDefinition.name,
                        type: INPUT_FIELD_TYPES.TEXT
                    };
                }
            }
        }
    );

    return fields;
};
