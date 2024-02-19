import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

import useNavigateTo from 'hooks/useNavigateTo.hook';
import { ROUTE_LIST } from 'pages/routes';
import { homePageStyles } from './Home.styles';

const Home = () => {
    const navigate = useNavigateTo();

    const handleLogin = () => navigate(ROUTE_LIST.dashboard);

    return (
        <Box sx={homePageStyles}>
            <Typography variant="h1" mb={3}>
                AXGrid
            </Typography>
            <Typography variant="caption" mb={4} maxWidth="550px">
                Trade solar, wind, kinetic, and more in this dynamic platform.
                Visualize diverse energy sources, analyze real-time data, and
                strike deals in a flash. It's the future of energy, at your
                fingertips. Welcome to AxGrid.
            </Typography>
            <Button
                onClick={handleLogin}
                endIcon={<LoginIcon />}
                variant="contained"
            >
                Login
            </Button>
        </Box>
    );
};

export default Home;
