import { Controller, FieldValues, Path } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { DATE_FORMAT } from 'utils/constants';
import { DateFieldProps } from './field.types';

const DateField = <T extends FieldValues>({
    control,
    label,
    name
}: DateFieldProps<T>) => {
    const today = new Date();

    return (
        <Controller
            control={control}
            name={name as Path<T>}
            render={({ field }) => (
                <DatePicker
                    format={DATE_FORMAT}
                    label={label}
                    minDate={today}
                    defaultValue={today}
                    onChange={date =>
                        date !== null && field.onChange(date.toISOString())
                    }
                />
            )}
        />
    );
};

export default DateField;
