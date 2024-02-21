import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import DataTableToolbar from './components/Toolbar';
import TableBody from './components/TableBody';
import useDataTable from './useDataTable.hook';
import TableHeader from './components/TableHeader';

interface DataTableProps<T> {
    rows: T[];
    rowIdKey: keyof T;
}

const DataTable = <T,>({ rows, rowIdKey }: DataTableProps<T>) => {
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
        handleChangeRowsPerPage,
        defaultColumns
    } = useDataTable<T, keyof T>({ rows, rowIdKey });

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%', mb: 2 }}>
                <DataTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                    >
                        <TableHeader<T>
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={defaultColumns}
                        />
                        <TableBody<T>
                            visibleRows={visibleRows}
                            handleClick={handleClick}
                            emptyRows={emptyRows}
                            rowIdKey={rowIdKey}
                            selected={selected}
                            defaultColumns={defaultColumns}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    component="div"
                />
            </Box>
        </Box>
    );
};

export default DataTable;
