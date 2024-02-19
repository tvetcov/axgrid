import { ReactNode, useMemo } from 'react';

import { IDashboardContext } from 'pages/Dashboard/dashboard.types';
import { DashboardContext } from './Dashboard.context';

interface DashboardContextProps extends IDashboardContext {
    children: ReactNode;
}

const DashboardContextProvider = ({
    children,
    energyType,
    setEnergyType,
    availableEnergySources,
    setAvailableEnergySources
}: DashboardContextProps) => {
    const contextValue = useMemo(() => {
        return {
            energyType,
            setEnergyType,
            availableEnergySources,
            setAvailableEnergySources
        };
    }, [
        energyType,
        setEnergyType,
        availableEnergySources,
        setAvailableEnergySources
    ]);

    return (
        <DashboardContext.Provider value={contextValue}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;
