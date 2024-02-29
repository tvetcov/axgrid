import {
    createRootRoute,
    createRouter,
    RouterProvider
} from '@tanstack/react-router';
import { useMemo } from 'react';

/**
 * Test router provider for testing components that use the router.
 */
export function TestRouter(props: React.PropsWithChildren) {
    const router = useMemo(
        () =>
            createRouter({
                routeTree: createRootRoute({
                    component: () => props.children,
                    notFoundComponent: () => props.children // temporary fix for rendering components
                })
            }),
        [props.children]
    );
    return <RouterProvider router={router} />;
}
