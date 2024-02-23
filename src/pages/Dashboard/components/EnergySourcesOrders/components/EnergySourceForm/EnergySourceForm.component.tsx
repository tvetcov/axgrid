import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextInput from 'components/Fields/TextField.component';
import { ENERGY_SOURCE_ID } from 'services/api.types';
import energySourceFormStyles from './energySourceForm.styles';
import useEnergySourceForm from './useEnergySourceForm.hook.ts';

const EnergySourceForm = ({ energyType }: { energyType: ENERGY_SOURCE_ID }) => {
    const { formFields, control, onSubmit, handleSubmit } =
        useEnergySourceForm(energyType);

    return (
        <form>
            <Box>
                {Object.entries(formFields).map(([title, fields]) => (
                    <>
                        <Typography variant="h3" mb={2}>
                            {title}
                        </Typography>
                        {fields.map(field => (
                            <FormControl
                                key={String(field.name)}
                                sx={energySourceFormStyles.formControl}
                            >
                                <TextInput
                                    control={control}
                                    name={field.name}
                                    label={field.label}
                                    type={field.type}
                                    InputProps={field.InputProps}
                                />
                            </FormControl>
                        ))}
                    </>
                ))}
            </Box>
            <Box>
                <Button
                    variant="contained"
                    onClick={() => void handleSubmit(onSubmit)()}
                >
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default EnergySourceForm;