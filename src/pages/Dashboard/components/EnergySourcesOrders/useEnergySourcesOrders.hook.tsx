import { MouseEvent, useMemo, useState } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDashboardContext } from 'pages/Dashboard/context/useDashboardContext';
import {
    ENERGY_SOURCE_ID,
    EnergySource,
    ORDER_STATUS
} from 'services/api.types';
import {
    getNextStatus,
    getTableColumns,
    getUniqueSourceNames
} from './energySourcesOrders.utils';

const useEnergySourcesOrders = () => {
    const {
        setEnergyType,
        energyType,
        availableEnergySources,
        filteredEnergySources,
        fieldDefinitions,
        editEnergySource
    } = useDashboardContext();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnergyTypeChange = (
        _: MouseEvent<HTMLElement>,
        newType: ENERGY_SOURCE_ID | null
    ) => {
        if (newType !== null) {
            setEnergyType(newType);
        }
    };

    const tableColumns = useMemo(() => {
        const energySourceId = filteredEnergySources[0]?.source; // anyway they have the same source as for current implementation

        return energySourceId
            ? getTableColumns({
                  energySourceId,
                  fieldDefinitions
              })
            : [];
    }, [fieldDefinitions, filteredEnergySources]);

    const rowActions = useMemo(
        () => [
            {
                label: 'Trade',
                icon: <AddShoppingCartIcon />,
                getIsDisabled: (row: EnergySource) =>
                    row.status === ORDER_STATUS.Accepted,
                onClick: (row: EnergySource) => {
                    const statusToSet = getNextStatus(row.status);

                    editEnergySource({
                        energySourceId: row.id,
                        propToEdit: 'status',
                        propValue: statusToSet
                    });
                }
            }
        ],
        [editEnergySource]
    );

    return {
        energyType,
        handleEnergyTypeChange,
        filteredEnergySources,
        tableColumns,
        isModalOpen,
        rowActions,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false),
        availableEnergySourceNames: getUniqueSourceNames(availableEnergySources)
    };
};

export default useEnergySourcesOrders;
