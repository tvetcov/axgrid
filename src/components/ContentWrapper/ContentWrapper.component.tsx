import { ReactNode } from 'react';

import Box from '@mui/material/Box';

import contentWrapperStyles from './contentWrapper.styles.ts';

const ContentWrapper = ({ children }: { children: ReactNode }) => {
    return <Box sx={contentWrapperStyles}>{children}</Box>;
};

export default ContentWrapper;
