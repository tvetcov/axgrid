import { createLazyFileRoute } from '@tanstack/react-router';

import { ROUTE_LIST } from 'pages/routes.ts';

import Dashboard from 'pages/Dashboard';

export const Route = createLazyFileRoute(ROUTE_LIST.dashboardIndex)({
    component: () => <Dashboard />
});
