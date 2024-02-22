import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#218095',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#f50057',
            contrastText: '#ffffff'
        },
        background: {
            default: '#F8F9FB',
            paper: '#FFFFFF'
        },
        text: {
            primary: '#161616',
            secondary: '#18475B',
            disabled: 'rgba(0,0,0,0.5)'
        },
        info: {
            main: '#1CB191',
            contrastText: '#ffffff'
        },
        divider: '#1CB191'
    },
    typography: {
        fontSize: 14,
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        h2: {
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1.33
        },
        h3: {
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.21
        },
        subtitle1: {
            fontSize: 14,
            fontWeight: 600
        },
        subtitle2: {
            fontSize: 12,
            fontWeight: 500
        },
        button: {
            fontSize: 12,
            lineHeight: 1.5
        },
        caption: {
            fontSize: 13,
            fontWeight: 500
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        fontFamily: 'Manrope'
    }
});

export default theme;
