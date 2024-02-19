import Box from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import Widget from 'components/Widget';
import EnergyIcon from 'pages/Dashboard/components/EnergyIcon';

import useEnergySourceSelector from './useEnergySourceSelector.hook';
import { energySourceSelectorStyles } from './EnergySourceSelector.styles';

const EnergySourceSelector = () => {
    const { energyType, handleEnergyTypeChange, availableEnergySources } =
        useEnergySourceSelector();

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
                    {availableEnergySources.map(energySource => (
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
        </Widget>
    );
};

export default EnergySourceSelector;
