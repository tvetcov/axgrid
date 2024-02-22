import { MouseEvent } from 'react';

import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { ENERGY_SOURCE_ID } from 'services/api.types';
import {
    getTableColumns,
    getUniqueSourceNames
} from './energySourceSelector.utils';

const useEnergySourceSelector = () => {
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

    return {
        energyType,
        handleEnergyTypeChange,
        filteredEnergySources,
        tableColumns: filteredEnergySources[0]
            ? getTableColumns(filteredEnergySources[0], fieldDefinitions)
            : [],
        availableEnergySourceNames: getUniqueSourceNames(availableEnergySources)
    };
};

export default useEnergySourceSelector;
