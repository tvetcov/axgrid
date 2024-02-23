import Button from '@mui/material/Button';

import { ENERGY_SOURCE_ID } from 'services/api.types';
import EnergyIcon from '../EnergyIcon';

interface ActionButtonProps {
    energyType: ENERGY_SOURCE_ID;
    onClick: () => void;
}

const ActionButton = ({ energyType, onClick }: ActionButtonProps) => (
    <Button
        variant="contained"
        onClick={onClick}
        startIcon={<EnergyIcon energyType={energyType} />}
    >
        Add new Deal
    </Button>
);

export default ActionButton;
