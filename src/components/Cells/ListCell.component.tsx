const ListCell = ({ list }: { list: { label: string; value: string }[] }) => {
    return (
        <>
            {list.map(listItem => {
                return (
                    <div>
                        <b>{listItem.label}:</b> {listItem.value}
                    </div>
                );
            })}
        </>
    );
};

export default ListCell;
