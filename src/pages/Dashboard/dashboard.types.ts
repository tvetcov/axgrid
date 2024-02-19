import { Dispatch, SetStateAction } from 'react';

import { ENERGY_SOURCE } from 'services/api.types';

export interface IDashboardContext {
    energyType: ENERGY_SOURCE;
    setEnergyType: Dispatch<SetStateAction<ENERGY_SOURCE>>;
    availableEnergySources: ENERGY_SOURCE[];
    setAvailableEnergySources: Dispatch<SetStateAction<ENERGY_SOURCE[]>>;
}
