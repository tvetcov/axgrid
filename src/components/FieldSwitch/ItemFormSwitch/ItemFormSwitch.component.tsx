import { lazy, Suspense } from 'react';
import { FieldValues } from 'react-hook-form';

import Alert from '@mui/material/Alert';

import {
    DateFieldProps,
    INPUT_FIELD_TYPES,
    TextFieldProps
} from 'components/Fields/field.types';

const TextField = lazy(() => import('components/Fields/TextField.component'));
const DateField = lazy(() => import('components/Fields/DateField.component'));
const ArrayDataField = lazy(
    () => import('components/Fields/ArrayDataField.component')
);

const ItemFormSwitch = <T extends FieldValues>(
    props: TextFieldProps<T> & DateFieldProps<T>
) => {
    const { type } = props;

    switch (type) {
        case INPUT_FIELD_TYPES.TEXT:
        case INPUT_FIELD_TYPES.NUMBER:
            return (
                <Suspense fallback={null}>
                    <TextField {...props} />
                </Suspense>
            );
        case INPUT_FIELD_TYPES.DATE:
            return (
                <Suspense fallback={null}>
                    <DateField {...props} />
                </Suspense>
            );
        case INPUT_FIELD_TYPES.ARRAY:
            return (
                <Suspense fallback={null}>
                    <ArrayDataField {...props} />
                </Suspense>
            );
        default:
            return (
                <Alert severity="error">
                    <b>Error:</b> Field type <b>"{type}"</b> is not supported
                </Alert>
            );
    }
};

export default ItemFormSwitch;
