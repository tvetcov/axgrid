import { createLazyFileRoute } from '@tanstack/react-router';

import { ROUTE_LIST } from 'pages/routes';

import Dashboard from 'pages/Dashboard';

export const Route = createLazyFileRoute(ROUTE_LIST.dashboard)({
    component: () => <Dashboard />
});
