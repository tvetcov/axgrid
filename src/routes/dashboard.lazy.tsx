import { createLazyFileRoute, Outlet } from '@tanstack/react-router';

import { ROUTE_LIST } from 'pages/routes.ts';
import TopBar from 'components/TopBar';

export const Route = createLazyFileRoute(ROUTE_LIST.dashboard)({
    component: () => (
        <>
            <TopBar />
            <Outlet />
        </>
    )
});
