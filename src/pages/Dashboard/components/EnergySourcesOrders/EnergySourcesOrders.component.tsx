import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Widget from 'components/Widget';
import DataTable from 'components/DataTable';

import { EnergySource } from 'services/api.types';
import Modal from 'components/Modal';
import EnergySourceForm from './components/EnergySourceForm';
import ActionButton from './components/ActionButton';
import EnergyIcon from './components/EnergyIcon';
import useEnergySourceSelector from './useEnergySourcesOrders.hook.tsx';
import energySourcesOrdersStyles from './energySourcesOrders.styles';

const EnergySourcesOrders = () => {
    const {
        energyType,
        handleEnergyTypeChange,
        availableEnergySourceNames,
        filteredEnergySources,
        tableColumns,
        isModalOpen,
        openModal,
        closeModal,
        rowActions
    } = useEnergySourceSelector();

    return (
        <Widget
            title="Energy Source Deals"
            subtitle="Displays the list of currently selected energy source deals"
            actionButton={
                <ActionButton onClick={openModal} energyType={energyType} />
            }
        >
            <Box sx={{ mt: 2 }}>
                <ToggleButtonGroup
                    value={energyType}
                    onChange={handleEnergyTypeChange}
                    exclusive
                >
                    {availableEnergySourceNames.map(energySource => (
                        <ToggleButton
                            sx={energySourcesOrdersStyles.button}
                            key={energySource}
                            value={energySource}
                        >
                            <EnergyIcon energyType={energySource} />
                            {energySource}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Box>
            <Box sx={{ mt: 2 }}>
                <DataTable<EnergySource>
                    rows={filteredEnergySources}
                    columns={tableColumns}
                    rowActions={rowActions}
                    rowIdKey="id"
                />
            </Box>
            <Modal
                title={`New ${energyType} Deal`}
                maxWidth="md"
                isOpen={isModalOpen}
                onClose={closeModal}
                hideActions
            >
                <EnergySourceForm
                    energyType={energyType}
                    closeModal={closeModal}
                />
            </Modal>
        </Widget>
    );
};

export default EnergySourcesOrders;
