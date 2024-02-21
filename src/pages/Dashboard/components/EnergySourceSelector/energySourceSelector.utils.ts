import { EnergySource } from 'services/api.types.ts';

export const getUniqueSourceNames = (sources: EnergySource[]) => {
    return [...new Set(sources.map(energySource => energySource.source))];
};
