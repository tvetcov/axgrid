import { useEffect, useState } from 'react';

import { ENERGY_SOURCE, EnergySource } from 'services/api.types';
import { timeout } from 'utils/utils';

export const useDashboard = () => {
    const [energyType, setEnergyType] = useState<ENERGY_SOURCE>(
        ENERGY_SOURCE.Solar
    );
    const [availableEnergySources, setAvailableEnergySources] = useState<
        ENERGY_SOURCE[]
    >([]);

    useEffect(() => {
        void fetch('./EnergySources.json').then(async response => {
            await timeout(250);

            const data = (await response.json()) as EnergySource[];
            const sources = [
                ...new Set(data.map(energyType => energyType.source))
            ];

            setAvailableEnergySources(sources);
        });
    }, []);

    return {
        energyType,
        availableEnergySources,
        setEnergyType,
        setAvailableEnergySources
    };
};
