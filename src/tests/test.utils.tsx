import {
    createHashHistory,
    createRouter,
    RouterProvider
} from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen.ts';

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

export const TestWrapper = ({ children }: { children: JSX.Element }) => {
    return <RouterProvider router={router}>{children}</RouterProvider>;
};
