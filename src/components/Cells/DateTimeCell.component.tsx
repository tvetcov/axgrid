interface DateTimeCellProps {
    value: string;
}

const DateTimeCell = ({ value }: DateTimeCellProps) => {
    const formattedDate = new Date(value).toLocaleString();

    return (
        <>
            <b>Until:</b> {formattedDate}
        </>
    );
};

export default DateTimeCell;
