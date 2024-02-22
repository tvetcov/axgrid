import { ReactNode, JSX } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import widgetStyles from './widget.styles.ts';

const Widget = ({
    title,
    subtitle,
    actionButton,
    children
}: {
    title: string;
    subtitle?: string;
    actionButton?: JSX.Element;
    children: ReactNode;
}) => {
    return (
        <Paper sx={widgetStyles.root}>
            <Typography variant="h2">{title}</Typography>
            {subtitle && (
                <Typography variant="subtitle2">{subtitle}</Typography>
            )}
            {actionButton && (
                <Box sx={widgetStyles.actionButton}>{actionButton}</Box>
            )}
            {children}
        </Paper>
    );
};

export default Widget;
