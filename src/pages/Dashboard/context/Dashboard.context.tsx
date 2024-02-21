import { createContext } from 'react';

import { IDashboardContext } from 'pages/Dashboard/dashboard.types';
import { ENERGY_SOURCE_ID } from 'services/api.types';

export const DashboardContext = createContext<IDashboardContext>({
    energyType: ENERGY_SOURCE_ID.Solar,
    setEnergyType: () => {},
    availableEnergySources: [],
    setAvailableEnergySources: () => {}
});

export default DashboardContext;
