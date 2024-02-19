import { createContext } from 'react';

import { IDashboardContext } from 'pages/Dashboard/dashboard.types';
import { ENERGY_SOURCE } from 'services/api.types';

export const DashboardContext = createContext<IDashboardContext>({
    energyType: ENERGY_SOURCE.Solar,
    setEnergyType: () => {},
    availableEnergySources: [],
    setAvailableEnergySources: () => {}
});

export default DashboardContext;
