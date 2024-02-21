import { SxProps } from '@mui/material';

export const widgetStyles: Record<string, SxProps> = {
    root: {
        m: 2,
        p: 2,
        position: 'relative',
        maxHeight: '100%',
        overflow: 'auto'
    },
    icon: {
        position: 'absolute',
        top: 16,
        right: 16,

        svg: {
            fontSize: 48
        }
    }
};
