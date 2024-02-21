import { useEffect, useState } from 'react';

import { ENERGY_SOURCE_ID, EnergySource } from 'services/api.types';
import { timeout } from 'utils/utils';

const useDashboard = () => {
    const [energyType, setEnergyType] = useState<ENERGY_SOURCE_ID>(
        ENERGY_SOURCE_ID.Thermal
    );
    const [availableEnergySources, setAvailableEnergySources] = useState<
        EnergySource[]
    >([]);

    useEffect(() => {
        void fetch('./apiMocks/energySources.json').then(async response => {
            await timeout(250);

            const data = (await response.json()) as EnergySource[];

            setAvailableEnergySources(data);
        });
    }, []);

    return {
        energyType,
        availableEnergySources,
        setEnergyType,
        setAvailableEnergySources
    };
};

export default useDashboard;
