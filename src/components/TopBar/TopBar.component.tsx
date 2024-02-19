import { SxProps } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useTopBar } from './useTopBar.hook';
import { topBarStyles } from './TopBar.styles';
import { LOGO_TEXT } from './topBar.utils';

const TopBar = () => {
    const {
        pages,
        settings,
        anchorElNav,
        anchorElUser,
        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu
    } = useTopBar();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={topBarStyles.logo}
                    >
                        {LOGO_TEXT}
                    </Typography>
                    <Box sx={topBarStyles.mobileMenu}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={topBarStyles.desktopMenu}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page.title}
                                    onClick={page.onClick}
                                >
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={
                            {
                                ...topBarStyles.logo,
                                ...topBarStyles.mobileLogo
                            } as SxProps
                        }
                    >
                        {LOGO_TEXT}
                    </Typography>
                    <Box sx={topBarStyles.navMenu}>
                        {pages.map(page => (
                            <Button key={page.title} onClick={page.onClick}>
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box flexGrow={0}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar alt="User Name" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map(setting => (
                                <MenuItem
                                    key={setting.title}
                                    onClick={setting.onClick}
                                >
                                    <Typography textAlign="center">
                                        {setting.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopBar;
