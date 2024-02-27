import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';

import { getComparator, stableSort } from './dataTable.utils';
import { Order } from './dataTable.types';

const useDataTable = <T, K extends keyof T>({
    rows,
    rowIdKey
}: {
    rows: T[];
    rowIdKey: K;
}) => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<string>(rowIdKey as string);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (_: MouseEvent<unknown>, property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
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

    const visibleRows: T[] = useMemo(
        () =>
            stableSort<T>(rows, getComparator<T>(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rows, rowsPerPage]
    );

    return {
        order,
        orderBy,
        handleRequestSort,
        visibleRows,
        emptyRows,
        rowsPerPage,
        page,
        handleChangePage,
        handleChangeRowsPerPage,
        rows
    };
};

export default useDataTable;
