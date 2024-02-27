import { useEffect, useState } from 'react';

import {
    ENERGY_SOURCE_ID,
    EnergySource,
    FieldDefinitions
} from 'services/api.types';
import DataService from 'services/data.service.ts';
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

    const editEnergySource = ({
        energySourceId,
        propToEdit,
        propValue
    }: {
        energySourceId: EnergySource['id'];
        propToEdit: keyof EnergySource;
        propValue: EnergySource[keyof EnergySource];
    }) => {
        const updatedEnergySources = filteredEnergySources.map(energySource => {
            if (energySource.id === energySourceId) {
                return {
                    ...energySource,
                    [propToEdit]: propValue
                };
            }

            return energySource;
        });

        setFilteredEnergySources(updatedEnergySources);
    };

    useEffect(() => {
        const filteredSources = availableEnergySources.filter(
            source => source.source === energyType
        );

        setFilteredEnergySources(filteredSources);
    }, [availableEnergySources, energyType]);

    useEffect(() => {
        void Promise.all([
            DataService.fetch<EnergySource[]>('energySources'),
            DataService.fetch<FieldDefinitions>('fields')
        ]).then(async ([energySources, fields]) => {
            await timeout(250);

            if (energySources && fields) {
                setAvailableEnergySources(energySources);
                setFieldDefinitions(fields);
            }
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
        addEnergySource,
        editEnergySource
    };
};

export default useDashboard;
