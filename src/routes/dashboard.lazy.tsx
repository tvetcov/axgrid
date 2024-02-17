import { createLazyFileRoute } from '@tanstack/react-router';

import Dashboard from 'pages/Dashboard';
import { ROUTE_LIST } from 'pages/config.ts';

export const Route = createLazyFileRoute(ROUTE_LIST.dashboard)({
    component: () => <Dashboard />,
});
