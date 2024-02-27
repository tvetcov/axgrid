import MUIToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { getToolbarStyles } from './toolbar.styles';

const Toolbar = ({ numSelected }: { numSelected: number }) => {
    const styles = getToolbarStyles(numSelected);

    return (
        <MUIToolbar sx={styles}>
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: 'Line Line 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: 'Line Line 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Trading Orders
                </Typography>
            )}
        </MUIToolbar>
    );
};

export default Toolbar;
