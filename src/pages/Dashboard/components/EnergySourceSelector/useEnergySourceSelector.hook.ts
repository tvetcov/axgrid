import { MouseEvent } from 'react';

import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import { ENERGY_SOURCE } from 'services/api.types';

const useEnergySourceSelector = () => {
    const { setEnergyType, energyType, availableEnergySources } =
        useDashboardContext();

    const handleEnergyTypeChange = (
        _: MouseEvent<HTMLElement>,
        newType: ENERGY_SOURCE | null
    ) => {
        if (newType !== null) {
            setEnergyType(newType);
        }
    };

    return { energyType, handleEnergyTypeChange, availableEnergySources };
};

export default useEnergySourceSelector;
