import { useContext } from 'react';
import { DashboardContext } from './Dashboard.context';

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);

    if (context === undefined) {
        throw new Error(
            'useDashboardContext must be used within a DashboardContextProvider'
        );
    }
    return context;
};
