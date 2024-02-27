import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import IconMenu from 'components/IconMenu';
import { DataTableBodyProps } from 'components/DataTable/dataTable.types';

const TableBody = <T,>({
    visibleRows,
    emptyRows,
    rowIdKey,
    defaultColumns,
    rowActions = []
}: DataTableBodyProps<T>) => {
    return (
        <MuiTableBody>
            {visibleRows.map(row => {
                return (
                    <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={String(row[rowIdKey])}
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell padding="checkbox">
                            <IconMenu<T> rowActions={rowActions} row={row}/>
                        </TableCell>
                        {defaultColumns.map(column => {
                            return (
                                <TableCell key={String(column.id)}>
                                    {column.cellRenderer(row)}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 33 * emptyRows
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </MuiTableBody>
    );
};

export default TableBody;
