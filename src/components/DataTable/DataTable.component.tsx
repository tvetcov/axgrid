import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';

import useDataTable from './useDataTable.hook';
import { DataTableProps } from './dataTable.types';

const ROWS_PER_PAGE = [5, 10, 25];

const DataTable = <T,>({
    rows,
    rowIdKey,
    columns,
    rowActions
}: DataTableProps<T>) => {
    const {
        order,
        orderBy,
        handleRequestSort,
        visibleRows,
        emptyRows,
        rowsPerPage,
        page,
        handleChangePage,
        handleChangeRowsPerPage
    } = useDataTable<T, keyof T>({ rows, rowIdKey });

    return (
        <Box sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size="small"
                >
                    <TableHeader<T>
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        headCells={columns}
                    />
                    <TableBody<T>
                        visibleRows={visibleRows}
                        emptyRows={emptyRows}
                        rowIdKey={rowIdKey}
                        defaultColumns={columns}
                        rowActions={rowActions}
                    />
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={ROWS_PER_PAGE}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                component="div"
            />
        </Box>
    );
};

export default DataTable;
