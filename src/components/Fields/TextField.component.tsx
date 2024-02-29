import { Controller, FieldValues, Path } from 'react-hook-form';

import { TextField as MuiTextField } from '@mui/material';

import { INPUT_FIELD_TYPES, TextFieldProps } from './field.types';

const TextField = <T extends FieldValues>({
    control,
    label,
    name,
    type = INPUT_FIELD_TYPES.TEXT,
    InputProps
}: TextFieldProps<T>) => {
    return (
        <Controller
            control={control}
            name={name as Path<T>}
            render={({ field }) => {
                return (
                    <MuiTextField
                        {...field}
                        InputProps={InputProps}
                        variant="outlined"
                        label={label}
                        type={type}
                        placeholder={`Enter ${label}`}
                        InputLabelProps={{ shrink: true }}
                    />
                );
            }}
        />
    );
};

export default TextField;
