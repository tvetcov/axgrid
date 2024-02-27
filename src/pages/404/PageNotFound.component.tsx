import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';

import ContentWrapper from 'components/ContentWrapper';
import useNavigateTo from 'hooks/useNavigateTo.hook';
import { ROUTE_LIST } from 'pages/routes';
import pageNotFoundStyles from './pageNotFound.styles';

const PageNotFound = () => {
    const navigate = useNavigateTo();

    const handleGoBack = () => {
        navigate(ROUTE_LIST.home);
    };

    return (
        <ContentWrapper>
            <Box sx={pageNotFoundStyles}>
                <Typography variant="h1" mb={4}>
                    404: Page Not Found
                </Typography>
                <Button
                    onClick={handleGoBack}
                    endIcon={<UndoIcon />}
                    variant="contained"
                >
                    Go Home
                </Button>
            </Box>
        </ContentWrapper>
    );
};

export default PageNotFound;
