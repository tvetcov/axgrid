import { MouseEvent } from 'react';

import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { ENERGY_SOURCE_ID } from 'services/api.types';
import { getUniqueSourceNames } from './energySourceSelector.utils.ts';

const useEnergySourceSelector = () => {
    const { setEnergyType, energyType, availableEnergySources } =
        useDashboardContext();

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
        availableEnergySources,
        availableEnergySourceNames: getUniqueSourceNames(availableEnergySources)
    };
};

export default useEnergySourceSelector;
