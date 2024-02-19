import { useNavigate } from '@tanstack/react-router';

import { ROUTE_LIST } from 'pages/routes';

const useNavigateTo = () => {
    const navigate = useNavigate();

    return (path: ROUTE_LIST) => void navigate({ to: path });
};

export default useNavigateTo;
