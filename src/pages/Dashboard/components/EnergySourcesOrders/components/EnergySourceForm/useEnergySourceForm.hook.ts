import { useForm } from 'react-hook-form';

import {
    CustomFieldValue,
    ENERGY_SOURCE_ID,
    EnergySource
} from 'services/api.types';
import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { formatCurrency } from 'utils/utils';
import {
    getCustomEnergyFormFields,
    getDefaultEnergyFormFields,
    getDefaultFormValues
} from './energySourceForm.utils';

const useEnergySourceForm = ({
    energyType,
    closeModal
}: {
    energyType: ENERGY_SOURCE_ID;
    closeModal: () => void;
}) => {
    const { fieldDefinitions, addEnergySource } = useDashboardContext();
    const sourceDefinitions = fieldDefinitions[energyType];
    const customFields = getCustomEnergyFormFields(sourceDefinitions);
    const fields = getDefaultEnergyFormFields(customFields);
    const defaultValues = getDefaultFormValues(customFields);
    const { handleSubmit, control } = useForm<typeof defaultValues>({
        defaultValues
    });

    const onSubmit = (data: typeof defaultValues) => {
        const modifiedData: EnergySource = {
            id: Math.random() * 1000,
            price: formatCurrency(Number(data.price)),
            minimumPurchaseQuantity: Number(data.minimumPurchaseQuantity),
            source: energyType,
            contractTerms: data.contractTerms as EnergySource['contractTerms'],
            paymentTerms: data.paymentTerms as EnergySource['paymentTerms'],
            customFields: sourceDefinitions.map(field => ({
                id: field.id,
                value: data[
                    String(field.id) as keyof typeof defaultValues
                ] as CustomFieldValue
            }))
        };
        addEnergySource(modifiedData);
        closeModal();
    };

    return {
        formFields: fields,
        control,
        handleSubmit: () => void handleSubmit(onSubmit)()
    };
};

export default useEnergySourceForm;
