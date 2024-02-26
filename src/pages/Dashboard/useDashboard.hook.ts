import { useEffect, useState } from 'react';

import {
    ENERGY_SOURCE_ID,
    EnergySource,
    FieldDefinitions
} from 'services/api.types';
import { timeout } from 'utils/utils';

const useDashboard = () => {
    const [energyType, setEnergyType] = useState<ENERGY_SOURCE_ID>(
        ENERGY_SOURCE_ID.Thermal
    );
    const [availableEnergySources, setAvailableEnergySources] = useState<
        EnergySource[]
    >([]);
    const [filteredEnergySources, setFilteredEnergySources] = useState<
        EnergySource[]
    >([]);
    const [fieldDefinitions, setFieldDefinitions] =
        useState<FieldDefinitions | null>(null);

    const addEnergySource = (energySource: EnergySource) => {
        setAvailableEnergySources([...availableEnergySources, energySource]);
    };

    useEffect(() => {
        const filteredSources = availableEnergySources.filter(
            source => source.source === energyType
        );

        setFilteredEnergySources(filteredSources);
    }, [availableEnergySources, energyType]);

    useEffect(() => {
        void Promise.all([
            fetch('./apiMocks/energySources.json'),
            fetch('./apiMocks/fields.json')
        ]).then(async ([energySources, fields]) => {
            await timeout(250);

            const sourcesData = (await energySources.json()) as EnergySource[];
            const fieldData = (await fields.json()) as FieldDefinitions;

            setAvailableEnergySources(sourcesData);
            setFieldDefinitions(fieldData);
        });
    }, []);

    return {
        fieldDefinitions,
        energyType,
        availableEnergySources,
        setEnergyType,
        setAvailableEnergySources,
        filteredEnergySources,
        setFilteredEnergySources,
        addEnergySource
    };
};

export default useDashboard;
