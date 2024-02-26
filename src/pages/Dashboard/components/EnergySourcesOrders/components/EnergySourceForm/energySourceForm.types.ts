import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import { INPUT_FIELD_TYPES } from 'components/Fields/field.types';

export interface FormFieldRecord {
    name: string;
    label: string;
    type: INPUT_FIELD_TYPES;
    InputProps?: Partial<OutlinedInputProps>;
}
