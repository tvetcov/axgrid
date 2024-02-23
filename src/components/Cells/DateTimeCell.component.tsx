import { format } from 'date-fns';

interface DateTimeCellProps {
    value: string;
}

const DateTimeCell = ({ value }: DateTimeCellProps) => {
    const formattedDate = format(new Date(value), 'dd/MM/yyyy');

    return (
        <>
            <b>Until:</b> {formattedDate}
        </>
    );
};

export default DateTimeCell;
