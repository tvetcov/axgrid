import { useForm } from 'react-hook-form';

import { ENERGY_SOURCE_ID } from 'services/api.types';
import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import {
    getCustomEnergyFormFields,
    getDefaultEnergyFormFields,
    getDefaultFormValues
} from './energySourceForm.utils';
import { EnergySourceFormValues } from './energySourceForm.types';

const useEnergySourceForm = (energyType: ENERGY_SOURCE_ID) => {
    const { fieldDefinitions } = useDashboardContext();
    const sourceDefinitions = fieldDefinitions[energyType];
    const customFields = getCustomEnergyFormFields(sourceDefinitions);
    const fields = getDefaultEnergyFormFields(customFields);
    const defaultValues = getDefaultFormValues(customFields);

    const { handleSubmit, control } = useForm<typeof defaultValues>({
        defaultValues
    });

    const onSubmit = (data: EnergySourceFormValues) => console.log(data);

    return {
        formFields: fields,
        control,
        onSubmit,
        handleSubmit
    };
};

export default useEnergySourceForm;
