import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@mui/material';

import { routeTree } from 'routeTree.gen';
import theme from 'styles/theme';

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
