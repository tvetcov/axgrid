import { Dispatch, SetStateAction } from 'react';

import { ENERGY_SOURCE_ID, EnergySource } from 'services/api.types';

export interface IDashboardContext {
    energyType: ENERGY_SOURCE_ID;
    setEnergyType: Dispatch<SetStateAction<ENERGY_SOURCE_ID>>;
    availableEnergySources: EnergySource[];
    setAvailableEnergySources: Dispatch<SetStateAction<EnergySource[]>>;
}
