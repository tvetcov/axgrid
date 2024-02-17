import { createLazyFileRoute } from '@tanstack/react-router';

import Home from 'pages/Home';
import { ROUTE_LIST } from 'pages/config.ts';

export const Route = createLazyFileRoute(ROUTE_LIST.home)({
    component: () => <Home />,
});
