import { createLazyFileRoute } from '@tanstack/react-router';

import { ROUTE_LIST } from 'pages/routes.ts';

export const Route = createLazyFileRoute(ROUTE_LIST.trading)({
    component: () => (
        <>
            <h1>trading</h1>
        </>
    )
});
