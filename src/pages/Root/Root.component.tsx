import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import NavBar from 'components/NavBar';

const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
};

export default Root;
