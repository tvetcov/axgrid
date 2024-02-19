import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { widgetStyles } from './Widget.styles';

const Widget = ({
    title,
    subtitle,
    icon,
    children
}: {
    title: string;
    subtitle?: string;
    icon?: React.JSX.Element;
    children: React.JSX.Element;
}) => {
    return (
        <Paper sx={widgetStyles.root}>
            <Typography variant="h2">{title}</Typography>
            {subtitle && (
                <Typography variant="subtitle2">{subtitle}</Typography>
            )}
            {icon && <Box sx={widgetStyles.icon}>{icon}</Box>}
            {children}
        </Paper>
    );
};

export default Widget;
