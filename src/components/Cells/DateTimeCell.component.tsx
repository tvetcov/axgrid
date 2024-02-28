import { format } from 'date-fns';

import { DATE_FORMAT } from 'utils/constants.ts';

interface DateTimeCellProps {
    value: string;
}

const DateTimeCell = ({ value }: DateTimeCellProps) => {
    const formattedDate = format(new Date(value), DATE_FORMAT);

    return (
        <>
            <b>Until:</b> {formattedDate}
        </>
    );
};

export default DateTimeCell;
