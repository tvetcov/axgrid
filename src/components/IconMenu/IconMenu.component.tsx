import { MouseEvent, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import { RowAction } from 'components/DataTable/dataTable.types';

const IconMenu = <T,>({
    rowActions,
    row
}: {
    rowActions: RowAction<T>[];
    row: T;
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        rowActions && (
            <>
                <IconButton
                    onClick={handleMenuClick}
                    size="large"
                    aria-label="delete"
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {rowActions.map(action => (
                        <MenuItem
                            disabled={action.getIsDisabled(row)}
                            onClick={() => {
                                action.onClick(row);
                                handleClose();
                            }}
                        >
                            <Box component="span" mr={1}>
                                {action.icon}
                            </Box>
                            {action.label}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        )
    );
};

export default IconMenu;
