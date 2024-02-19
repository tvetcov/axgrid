import { SxProps } from '@mui/material';

export const topBarStyles: Record<string, SxProps> = {
    logo: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none'
    },
    mobileLogo: {
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1
    },
    mobileMenu: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' }
    },
    desktopMenu: {
        display: { xs: 'block', md: 'none' }
    },
    navMenu: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },

        '.MuiButton-root': { my: 2, color: 'white', display: 'block' }
    }
};
