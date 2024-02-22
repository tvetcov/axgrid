import Button from '@mui/material/Button';

import { ENERGY_SOURCE_ID } from 'services/api.types.ts';
import EnergyIcon from '../EnergyIcon';

interface ActionButtonProps {
    energyType: ENERGY_SOURCE_ID;
}

const ActionButton = ({ energyType }: ActionButtonProps) => (
    <Button
        variant="contained"
        startIcon={<EnergyIcon energyType={energyType} />}
    >
        Add new Order
    </Button>
);

export default ActionButton;
