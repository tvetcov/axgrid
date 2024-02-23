import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { OutlinedInputProps, TextField as MuiTextField } from '@mui/material';

type TextFieldProps<T extends FieldValues> = {
    control: Control<T, object>;
    label: string;
    name: string;
    type: string;
    InputProps?: Partial<OutlinedInputProps>;
};

const TextField = <T extends FieldValues>({
    control,
    label,
    name,
    type = 'text',
    InputProps
}: TextFieldProps<T>) => {
    return (
        <Controller
            control={control}
            name={name as Path<T>}
            render={({ field }) => (
                <MuiTextField
                    {...field}
                    InputProps={InputProps}
                    variant="outlined"
                    label={label}
                    type={type}
                    placeholder={`Enter ${label}`}
                    InputLabelProps={{ shrink: true }}
                />
            )}
        />
    );
};

export default TextField;
