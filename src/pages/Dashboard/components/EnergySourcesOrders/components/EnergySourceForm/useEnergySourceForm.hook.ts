import { useForm } from 'react-hook-form';

import { ENERGY_SOURCE_ID } from 'services/api.types.ts';
import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext.ts';
import {
    defaultFormValues,
    getCustomEnergyFormFields,
    getDefaultEnergyFormFields
} from './energySourceForm.utils.tsx';
import { EnergySourceFormValues } from './energySourceForm.types.ts';

const useEnergySourceForm = (energyType: ENERGY_SOURCE_ID) => {
    const { handleSubmit, control } = useForm<EnergySourceFormValues>({
        defaultValues: defaultFormValues
    });
    const { fieldDefinitions } = useDashboardContext();

    const sourceDefinitions = fieldDefinitions[energyType];

    const onSubmit = (data: EnergySourceFormValues) => console.log(data);

    const customFields = getCustomEnergyFormFields(sourceDefinitions);
    const fields = getDefaultEnergyFormFields(customFields);

    return {
        formFields: fields,
        control,
        onSubmit,
        handleSubmit
    };
};

export default useEnergySourceForm;
