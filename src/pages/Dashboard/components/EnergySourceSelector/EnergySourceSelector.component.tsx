import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Widget from 'components/Widget';
import DataTable from 'components/DataTable';
import EnergyIcon from 'pages/Dashboard/components/EnergyIcon';

import { EnergySource } from 'services/api.types';
import useEnergySourceSelector from './useEnergySourceSelector.hook';
import { energySourceSelectorStyles } from './EnergySourceSelector.styles';

const EnergySourceSelector = () => {
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
            icon={<EnergyIcon energyType={energyType} />}
        >
            <Box sx={{ mt: 2 }}>
                <ToggleButtonGroup
                    value={energyType}
                    onChange={handleEnergyTypeChange}
                    exclusive
                >
                    {availableEnergySourceNames.map(energySource => (
                        <ToggleButton
                            sx={energySourceSelectorStyles.button}
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

export default EnergySourceSelector;
