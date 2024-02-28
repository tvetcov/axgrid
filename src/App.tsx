import {
    createMemoryHistory,
    createRouter,
    RouterProvider
} from '@tanstack/react-router';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import { routeTree } from 'routeTree.gen';
import theme from 'styles/theme';

const memoryHistory = createMemoryHistory({
    initialEntries: ['/']
});

const router = createRouter({ routeTree, history: memoryHistory });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <RouterProvider router={router} />
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
