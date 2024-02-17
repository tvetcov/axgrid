import { createRootRoute } from '@tanstack/react-router';

import Root from 'pages/Root';
import PageNotFound from 'pages/404';

export const Route = createRootRoute({
    component: () => <Root />,
    notFoundComponent: () => {
        return <PageNotFound />;
    },
});
