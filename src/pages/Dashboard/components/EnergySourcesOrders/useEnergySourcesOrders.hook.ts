import { MouseEvent, useMemo } from 'react';

import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { ENERGY_SOURCE_ID } from 'services/api.types';
import {
    getTableColumns,
    getUniqueSourceNames
} from './energySourcesOrders.utils.tsx';

const useEnergySourcesOrders = () => {
    const {
        setEnergyType,
        energyType,
        availableEnergySources,
        filteredEnergySources,
        fieldDefinitions
    } = useDashboardContext();

    const handleEnergyTypeChange = (
        _: MouseEvent<HTMLElement>,
        newType: ENERGY_SOURCE_ID | null
    ) => {
        if (newType !== null) {
            setEnergyType(newType);
        }
    };

    const tableColumns = useMemo(() => {
        const energySourceId = filteredEnergySources[0]?.source;

        return energySourceId
            ? getTableColumns({
                  energySourceId,
                  fieldDefinitions
              })
            : [];
    }, [fieldDefinitions, filteredEnergySources]);

    return {
        energyType,
        handleEnergyTypeChange,
        filteredEnergySources,
        tableColumns,
        availableEnergySourceNames: getUniqueSourceNames(availableEnergySources)
    };
};

export default useEnergySourcesOrders;
