import { useEffect, useState, useCallback } from 'react';

import {
    ENERGY_SOURCE_ID,
    EnergySource,
    FieldDefinitions
} from 'services/api.types';
import DataFetchService from 'services/dataFetch.service';
import SocketService from 'services/socket.service';

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

    const editEnergySource = useCallback(
        ({
            energySourceId,
            propToEdit,
            propValue
        }: {
            energySourceId: EnergySource['id'];
            propToEdit: keyof EnergySource;
            propValue: EnergySource[keyof EnergySource];
        }) => {
            const updatedEnergySources = availableEnergySources.map(
                energySource => {
                    if (energySource.id === energySourceId) {
                        return {
                            ...energySource,
                            [propToEdit]: propValue
                        };
                    }

                    return energySource;
                }
            );

            SocketService.send(
                JSON.stringify({
                    data: {
                        id: energySourceId,
                        [propToEdit]: propValue
                    }
                })
            );

            setAvailableEnergySources(updatedEnergySources);
        },
        [availableEnergySources]
    );

    SocketService.onMessage((message: string) => {
        const parsedMessage = JSON.parse(message) as { data: EnergySource };

        const updatedEnergySources = availableEnergySources.map(
            energySource => {
                if (energySource.id === parsedMessage.data.id) {
                    return {
                        ...energySource,
                        ...parsedMessage.data
                    };
                }

                return energySource;
            }
        );

        setAvailableEnergySources(updatedEnergySources);
    });

    useEffect(() => {
        const filteredSources = availableEnergySources.filter(
            source => source.source === energyType
        );

        setFilteredEnergySources(filteredSources);
    }, [availableEnergySources, energyType]);

    useEffect(() => {
        void Promise.all([
            DataFetchService.fetch<EnergySource[]>('energySources'),
            DataFetchService.fetch<FieldDefinitions>('fields')
        ]).then(([energySources, fields]) => {
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
