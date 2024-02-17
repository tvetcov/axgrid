import { Outlet } from '@tanstack/react-router';

import ContentWrapper from 'components/ContentWrapper';

const Root = () => {
    return (
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
    );
};

export default Root;
