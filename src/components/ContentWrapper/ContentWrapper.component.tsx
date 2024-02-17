import { Paper } from '@mui/material';

import { contentWrapperStyles } from './ContentWrapper.styles';

const ContentWrapper = ({ children }: { children: React.JSX.Element }) => {
    return (
        <Paper sx={contentWrapperStyles} square>
            {children}
        </Paper>
    );
};

export default ContentWrapper;
