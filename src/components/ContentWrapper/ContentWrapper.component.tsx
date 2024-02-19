import Box from '@mui/material/Box';

import { contentWrapperStyles } from './ContentWrapper.styles';

const ContentWrapper = ({ children }: { children: React.JSX.Element }) => {
    return <Box sx={contentWrapperStyles}>{children}</Box>;
};

export default ContentWrapper;
