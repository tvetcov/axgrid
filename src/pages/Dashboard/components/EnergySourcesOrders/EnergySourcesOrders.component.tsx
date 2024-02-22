import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Widget from 'components/Widget';
import DataTable from 'components/DataTable';

import { EnergySource } from 'services/api.types';
import ActionButton from './components/ActionButton';
import EnergyIcon from './components/EnergyIcon';
import useEnergySourceSelector from './useEnergySourcesOrders.hook.ts';
import energySourcesOrdersStyles from './energySourcesOrders.styles.ts';

const EnergySourcesOrders = () => {
    const {
        energyType,
        handleEnergyTypeChange,
        availableEnergySourceNames,
        filteredEnergySources,
        tableColumns
    } = useEnergySourceSelector();

    return (
        <Widget
            title="Energy Sources"
            subtitle="Displays the currently selected energy source"
            actionButton={<ActionButton energyType={energyType} />}
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
                    rowIdKey="id"
                />
            </Box>
        </Widget>
    );
};

export default EnergySourcesOrders;
