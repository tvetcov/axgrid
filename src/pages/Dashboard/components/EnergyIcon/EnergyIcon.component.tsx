import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import WaterIcon from '@mui/icons-material/Water';
import WindPowerIcon from '@mui/icons-material/WindPower';
import AnimationIcon from '@mui/icons-material/Animation';
import ReportIcon from '@mui/icons-material/Report';

import { ENERGY_SOURCE } from 'services/api.types';

const EnergyIcon = ({ energyType }: { energyType: ENERGY_SOURCE }) => {
    switch (energyType) {
        case ENERGY_SOURCE.Solar:
            return <WbSunnyIcon />;
        case ENERGY_SOURCE.Gas:
            return <OilBarrelIcon />;
        case ENERGY_SOURCE.Wind:
            return <WindPowerIcon />;
        case ENERGY_SOURCE.Hydro:
            return <WaterIcon />;
        case ENERGY_SOURCE.Kinetic:
            return <AnimationIcon />;
        case ENERGY_SOURCE.Thermal:
            return <ThermostatIcon />;
        default:
            return <ReportIcon />;
    }
};

export default EnergyIcon;
