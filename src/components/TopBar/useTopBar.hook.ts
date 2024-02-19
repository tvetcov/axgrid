import { MouseEvent, useState } from 'react';

import useNavigateTo from 'hooks/useNavigateTo.hook';
import { ROUTE_LIST } from 'pages/routes';

export const useTopBar = () => {
    const navigate = useNavigateTo();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings = [
        {
            title: 'Logout',
            onClick: () => navigate(ROUTE_LIST.home)
        }
    ];

    const pages = [
        {
            title: 'Dashboard',
            onClick: () => navigate(ROUTE_LIST.dashboardIndex)
        },
        {
            title: 'Trading',
            onClick: () => navigate(ROUTE_LIST.trading)
        }
    ];

    return {
        pages,
        settings,
        anchorElNav,
        anchorElUser,
        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu
    };
};
