import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import { INPUT_FIELD_TYPES } from 'components/Fields/field.types';
import { DEFAULT_FORM_VALUES } from './energySourceForm.utils';

export type EnergySourceFormValues = typeof DEFAULT_FORM_VALUES;

export interface FormFieldRecord {
    name: string;
    label: string;
    type: INPUT_FIELD_TYPES;
    InputProps?: Partial<OutlinedInputProps>;
}
