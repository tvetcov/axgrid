import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { DATE_FORMAT } from 'utils/constants';

interface DateFieldProps<T extends FieldValues> {
    control: Control<T, object>;
    name: Path<T>;
    label: string;
}

const DateField = <T extends FieldValues>({
    control,
    label,
    name
}: DateFieldProps<T>) => {
    const today = new Date();

    return (
        <Controller
            control={control}
            name={name}
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
