import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import TableToolbar from './components/Toolbar';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';

import useDataTable from './useDataTable.hook';
import { DataTableProps } from './dataTable.types';

const ROWS_PER_PAGE = [5, 10, 25];

const DataTable = <T,>({ rows, rowIdKey, columns }: DataTableProps<T>) => {
    const {
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
        handleChangeRowsPerPage
    } = useDataTable<T, keyof T>({ rows, rowIdKey });

    return (
        <Box sx={{ width: '100%', mb: 2 }}>
            <TableToolbar numSelected={selected.length} />
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size="small"
                >
                    <TableHeader<T>
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        headCells={columns}
                    />
                    <TableBody<T>
                        visibleRows={visibleRows}
                        handleClick={handleClick}
                        emptyRows={emptyRows}
                        rowIdKey={rowIdKey}
                        selected={selected}
                        defaultColumns={columns}
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
