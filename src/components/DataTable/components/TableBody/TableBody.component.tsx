import { ReactNode } from 'react';

import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

import { isSelected } from 'components/DataTable/dataTable.utils.ts';
import { DataTableBodyProps } from 'components/DataTable/dataTable.types.ts';

const TableBody = <T,>({
    visibleRows,
    handleClick,
    emptyRows,
    rowIdKey,
    selected,
    defaultColumns
}: DataTableBodyProps<T>) => {

    return (
        <MuiTableBody>
            {visibleRows.map((row, index) => {
                const isItemSelected = isSelected<T>(row[rowIdKey], selected);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                        hover
                        onClick={() => handleClick(row[rowIdKey])}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={String(row[rowIdKey])}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                    'aria-labelledby': labelId
                                }}
                            />
                        </TableCell>
                        {defaultColumns.map(column => {
                            // TODO add dynamic cell renderer
                            const value = row[column.id] as ReactNode;

                            return (
                                typeof value !== 'object' && (
                                    <TableCell
                                        key={String(column.id)}
                                        align={
                                            column.numeric ? 'right' : 'left'
                                        }
                                    >
                                        {value}
                                    </TableCell>
                                )
                            );
                        })}
                    </TableRow>
                );
            })}
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 53 * emptyRows
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </MuiTableBody>
    );
};

export default TableBody;
