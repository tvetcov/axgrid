import { useNavigate } from '@tanstack/react-router';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

import { homePageStyles } from './Home.styles.ts';
import { ROUTE_LIST } from 'pages/config.ts';

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        void navigate({ to: ROUTE_LIST.dashboard });
    };

    return (
        <Box sx={homePageStyles}>
            <Typography variant="h1" mb={6}>
                AXGrid
            </Typography>
            <Button
                onClick={handleLogin}
                endIcon={<LoginIcon />}
                variant="contained"
            >
                Login
            </Button>
            <Typography variant="subtitle1" mt={4}>
                AxGrid: Tame the Multiverse's Energy Chaos.
            </Typography>
            <Typography variant="caption" mt={2} maxWidth="550px">
                Trade solar, wind, kinetic, and more in this dynamic platform.
                Visualize diverse energy sources, analyze real-time data, and
                strike deals in a flash. It's the future of energy, at your
                fingertips. Welcome to AxGrid.
            </Typography>
        </Box>
    );
};

export default Home;
