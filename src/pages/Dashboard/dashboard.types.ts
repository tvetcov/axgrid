import { Dispatch, SetStateAction } from 'react';

import { ENERGY_SOURCE_ID, EnergySource, FieldDefinitions } from 'services/api.types';

export interface IDashboardContext {
    fieldDefinitions: FieldDefinitions;
    energyType: ENERGY_SOURCE_ID;
    setEnergyType: Dispatch<SetStateAction<ENERGY_SOURCE_ID>>;
    availableEnergySources: EnergySource[];
    setAvailableEnergySources: Dispatch<SetStateAction<EnergySource[]>>;
    filteredEnergySources: EnergySource[];
    setFilteredEnergySources: Dispatch<SetStateAction<EnergySource[]>>;
}
