import { ReactNode, useMemo } from 'react';

import { IDashboardContext } from 'pages/Dashboard/dashboard.types';
import { DashboardContext } from './Dashboard.context';

interface DashboardContextProps extends IDashboardContext {
    children: ReactNode;
}

const DashboardContextProvider = ({
    children,
    fieldDefinitions,
    energyType,
    setEnergyType,
    availableEnergySources,
    setAvailableEnergySources,
    filteredEnergySources,
    setFilteredEnergySources,
    addEnergySource
}: DashboardContextProps) => {
    const contextValue = useMemo(() => {
        return {
            fieldDefinitions,
            energyType,
            setEnergyType,
            availableEnergySources,
            setAvailableEnergySources,
            filteredEnergySources,
            setFilteredEnergySources,
            addEnergySource
        };
    }, [
        fieldDefinitions,
        energyType,
        setEnergyType,
        availableEnergySources,
        setAvailableEnergySources,
        filteredEnergySources,
        setFilteredEnergySources,
        addEnergySource
    ]);

    return (
        <DashboardContext.Provider value={contextValue}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContextProvider;
