import { useState } from 'react';
import { Controller, FieldValues, Path } from 'react-hook-form';

import Box from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { ArrayDataFieldProps, INPUT_FIELD_TYPES } from './field.types.ts';

const defaultValue = { label: '', value: '' };
const MAX_ROWS = 10;

const ArrayDataField = <T extends FieldValues>({
    control,
    label,
    name,
    InputProps
}: ArrayDataFieldProps<T>) => {
    const [valuesArray, setValueArray] = useState([defaultValue]);

    const handleAddValue = () => {
        setValueArray(prevValue => [...prevValue, defaultValue]);
    };

    const handleRemoveValue = (index: number) => {
        setValueArray(prevValue => prevValue.filter((_, i) => i !== index));
    };

    return (
        <Controller
            control={control}
            name={name as Path<T>}
            render={({ field }) => (
                <>
                    <Typography variant="h3" mb={2}>
                        {label}
                    </Typography>
                    {valuesArray.map((value, index) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2
                            }}
                        >
                            <MuiTextField
                                {...field}
                                value={value.label}
                                onChange={e => {
                                    const newValues = [...valuesArray];
                                    newValues[index].label = e.target.value;
                                    setValueArray(newValues);
                                    field.onChange(newValues);
                                }}
                                InputProps={InputProps}
                                type={INPUT_FIELD_TYPES.TEXT}
                                InputLabelProps={{ shrink: true }}
                                sx={{ mr: 2 }}
                                variant="outlined"
                                label="Label"
                                placeholder="Enter Label"
                            />
                            <MuiTextField
                                {...field}
                                value={value.value}
                                onChange={e => {
                                    const newValues = [...valuesArray];
                                    newValues[index].value = e.target.value;
                                    setValueArray(newValues);
                                    field.onChange(newValues);
                                }}
                                InputProps={InputProps}
                                type={INPUT_FIELD_TYPES.TEXT}
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                label="Value"
                                placeholder="Enter Value"
                            />
                            <Box sx={{ ml: 2 }}>
                                <Tooltip
                                    title="Add a Value"
                                    disableInteractive
                                    arrow
                                >
                                    <IconButton
                                        onClick={handleAddValue}
                                        disabled={
                                            valuesArray.length === MAX_ROWS ||
                                            valuesArray[index].label === '' ||
                                            valuesArray[index].value === ''
                                        }
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
                                        disabled={valuesArray.length === 1}
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
            )}
        />
    );
};

export default ArrayDataField;
