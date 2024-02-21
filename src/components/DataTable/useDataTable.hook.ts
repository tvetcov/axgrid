import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';

import {
    getComparator,
    getDefaultColumns,
    stableSort
} from './dataTable.utils.ts';
import { Order } from './dataTable.types.ts';

const useDataTable = <T, K extends keyof T>({
    rows,
    rowIdKey
}: {
    rows: T[];
    rowIdKey: K;
}) => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<K>(rowIdKey);
    const [selected, setSelected] = useState<T[K][]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (_: MouseEvent<unknown>, property: K) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map(row => row[rowIdKey]);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (id: T[K]) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: T[K][] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const defaultColumns = getDefaultColumns<T>(rows?.[0]);

    const visibleRows: T[] = useMemo(
        () =>
            stableSort<T>(rows, getComparator<T, K>(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rows, rowsPerPage]
    );

    return {
        selected,
        order,
        orderBy,
        handleSelectAllClick,
        handleRequestSort,
        visibleRows,
        handleClick,
        emptyRows,
        rowsPerPage,
        page,
        handleChangePage,
        handleChangeRowsPerPage,
        rows,
        defaultColumns
    };
};

export default useDataTable;
