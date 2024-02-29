import { z, ZodType } from 'zod';

import { DEFAULT_FORM_VALUES } from './energySourceForm.utils.tsx';

// @ts-expect-error typescript requires some types to be strict, while I need them to be different in the form
export const EnergyFormValidationSchema: ZodType<
    Partial<typeof DEFAULT_FORM_VALUES>
> = z.object({
    price: z
        .number({
            required_error: 'Price is required',
            invalid_type_error: 'Price is required to be number'
        })
        .positive()
        .min(1)
        .max(99999),
    minimumPurchaseQuantity: z
        .number({
            required_error: 'Min purchase quantity is required',
            invalid_type_error: 'Min purchase quantity is required to be number'
        })
        .positive()
});
