import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import WaterIcon from '@mui/icons-material/Water';
import WindPowerIcon from '@mui/icons-material/WindPower';
import AnimationIcon from '@mui/icons-material/Animation';
import ReportIcon from '@mui/icons-material/Report';

import { ENERGY_SOURCE_ID } from 'services/api.types';

const EnergyIcon = ({ energyType }: { energyType: ENERGY_SOURCE_ID }) => {
    switch (energyType) {
        case ENERGY_SOURCE_ID.Solar:
            return <WbSunnyIcon />;
        case ENERGY_SOURCE_ID.Gas:
            return <OilBarrelIcon />;
        case ENERGY_SOURCE_ID.Wind:
            return <WindPowerIcon />;
        case ENERGY_SOURCE_ID.Hydro:
            return <WaterIcon />;
        case ENERGY_SOURCE_ID.Kinetic:
            return <AnimationIcon />;
        case ENERGY_SOURCE_ID.Thermal:
            return <ThermostatIcon />;
        default:
            return <ReportIcon />;
    }
};

export default EnergyIcon;
