import { SxProps } from '@mui/material';

const widgetStyles: Record<string, SxProps> = {
    root: {
        m: 2,
        p: 2,
        position: 'relative',
        maxHeight: '100%',
        overflow: 'auto'
    },
    actionButton: {
        position: 'absolute',
        top: 16,
        right: 16
    }
};

export default widgetStyles;
