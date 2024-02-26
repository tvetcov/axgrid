import {
    ArrayPath,
    Controller,
    FieldValues,
    Path,
    FieldArray,
    useFieldArray
} from 'react-hook-form';

import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { ArrayDataFieldProps, INPUT_FIELD_TYPES } from './field.types.ts';

const rowWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: 2
};
const defaultValue = { label: '', value: '' };
const MAX_ROWS = 10;

const ArrayDataField = <T extends FieldValues>({
    control,
    label,
    name,
    InputProps
}: ArrayDataFieldProps<T>) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: name as ArrayPath<T>
    });

    const handleAddValue = () => {
        append([defaultValue] as
            | FieldArray<T, ArrayPath<T>>
            | FieldArray<T, ArrayPath<T>>[]);
    };

    const handleRemoveValue = (index: number) => {
        remove(index);
    };

    return (
        <>
            <Typography variant="h3" mb={2}>
                {label}
            </Typography>
            {fields.map((value, index) => (
                <Box sx={rowWrapperStyles}>
                    <Controller
                        key={value.id}
                        control={control}
                        name={`${name}[${index}].label` as Path<T>}
                        render={({ field }) => (
                            <MuiTextField
                                {...field}
                                InputProps={InputProps}
                                type={INPUT_FIELD_TYPES.TEXT}
                                InputLabelProps={{ shrink: true }}
                                sx={{ mr: 2 }}
                                variant="outlined"
                                label="Label"
                                placeholder="Enter Label"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={`${name}[${index}].value` as Path<T>}
                        render={({ field }) => (
                            <MuiTextField
                                {...field}
                                name={`${name}[${index}].value`}
                                InputProps={InputProps}
                                type={INPUT_FIELD_TYPES.TEXT}
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                label="Value"
                                placeholder="Enter Value"
                            />
                        )}
                    />
                    <Box sx={{ ml: 2 }}>
                        <Tooltip title="Add a Value" disableInteractive arrow>
                            <IconButton
                                onClick={handleAddValue}
                                disabled={fields.length === MAX_ROWS}
                                aria-label="add"
                            >
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Delete a Value"
                            disableInteractive
                            arrow
                        >
                            <IconButton
                                disabled={fields.length === 1}
                                onClick={() => handleRemoveValue(index)}
                                aria-label="delete"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default ArrayDataField;
