import { createContext } from 'react';

import { IDashboardContext } from 'pages/Dashboard/dashboard.types';
import { ENERGY_SOURCE_ID } from 'services/api.types';

export const DashboardContext = createContext<IDashboardContext>({
    fieldDefinitions: {
        [ENERGY_SOURCE_ID.Solar]: [],
        [ENERGY_SOURCE_ID.Gas]: [],
        [ENERGY_SOURCE_ID.Wind]: [],
        [ENERGY_SOURCE_ID.Hydro]: [],
        [ENERGY_SOURCE_ID.Kinetic]: [],
        [ENERGY_SOURCE_ID.Thermal]: []
    },
    filteredEnergySources: [],
    setFilteredEnergySources: () => {},
    energyType: ENERGY_SOURCE_ID.Solar,
    setEnergyType: () => {},
    availableEnergySources: [],
    setAvailableEnergySources: () => {},
    addEnergySource: () => {}
});

export default DashboardContext;
