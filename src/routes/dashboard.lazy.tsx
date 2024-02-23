import { createLazyFileRoute, Outlet } from '@tanstack/react-router';

import Box from '@mui/material/Box';

import TopBar from 'components/TopBar';
import { dashboardStyles } from 'pages/Dashboard/dashboard.styles';
import { ROUTE_LIST } from 'pages/routes';

export const Route = createLazyFileRoute(ROUTE_LIST.dashboard)({
    component: () => (
        <Box sx={dashboardStyles}>
            <TopBar />
            <Outlet />
        </Box>
    )
});
