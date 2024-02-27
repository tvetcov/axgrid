import { MouseEvent } from 'react';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

import { DataTableHeaderProps } from 'components/DataTable/dataTable.types';

const TableHeader = <T,>({
    order,
    orderBy,
    onRequestSort,
    headCells
}: DataTableHeaderProps<T>) => {
    const createSortHandler =
        (property: string) => (event: MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    {/* empty header cell for action menu */}
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={String(headCell.id)}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ minWidth: headCell.width }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
