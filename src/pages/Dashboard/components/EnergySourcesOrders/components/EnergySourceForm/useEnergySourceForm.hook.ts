import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    CustomFieldValue,
    ENERGY_SOURCE_ID,
    EnergySource,
    ORDER_STATUS
} from 'services/api.types';
import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { formatCurrency } from 'utils/utils';
import {
    getCustomEnergyFormFields,
    getDefaultEnergyFormFields,
    getDefaultFormValues
} from './energySourceForm.utils';
import { EnergyFormValidationSchema } from './formValidation.schema.ts';

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
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<typeof defaultValues>({
        defaultValues,
        resolver: zodResolver(EnergyFormValidationSchema)
    });

    const onSubmit = (data: typeof defaultValues) => {
        const modifiedData: EnergySource = {
            id: Math.random() * 1000,
            status: ORDER_STATUS.Open,
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
        errors,
        handleSubmit: () => void handleSubmit(onSubmit)()
    };
};

export default useEnergySourceForm;
