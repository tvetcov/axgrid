const ListCell = ({ list }: { list: { label: string; value: string }[] }) => {
    return (
        <>
            {list.map(listItem => {
                return (
                    Boolean(listItem.value) && (
                        <div key={listItem.value}>
                            <b>{listItem.label}:</b> {listItem.value}
                        </div>
                    )
                );
            })}
        </>
    );
};

export default ListCell;
