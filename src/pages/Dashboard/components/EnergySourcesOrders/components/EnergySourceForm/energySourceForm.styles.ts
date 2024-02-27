import { INPUT_FIELD_TYPES } from 'components/Fields/field.types';

export default function (type: INPUT_FIELD_TYPES) {
    return {
        m: 1,
        mb: 2,
        width: type !== INPUT_FIELD_TYPES.ARRAY ? '48%' : '100%'
    };
}
