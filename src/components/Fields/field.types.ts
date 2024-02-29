import { Control, FieldValues } from 'react-hook-form';
import { OutlinedInputProps } from '@mui/material';

export enum INPUT_FIELD_TYPES {
    TEXT = 'text',
    NUMBER = 'number',
    DATE = 'date',
    ARRAY = 'array'
}

export interface DateFieldProps<T extends FieldValues> {
    control: Control<T, object>;
    name: string;
    label: string;
}

export type TextFieldProps<T extends FieldValues> = {
    control: Control<T, object>;
    label: string;
    name: string;
    type: INPUT_FIELD_TYPES;
    InputProps?: Partial<OutlinedInputProps>;
    error: string | undefined;
};

export type ArrayDataFieldProps<T extends FieldValues> = {
    control: Control<T, object>;
    label: string;
    name: string;
    type: INPUT_FIELD_TYPES;
    InputProps?: Partial<OutlinedInputProps>;
};
