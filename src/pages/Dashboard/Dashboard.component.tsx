import EnergySourceSelector from './components/EnergySourceSelector';
import DashboardContextProvider from './context/DashboardContext.provider';
import { useDashboard } from './useDashboard.hook';

const Dashboard = () => {
    const {
        energyType,
        setEnergyType,
        availableEnergySources,
        setAvailableEnergySources
    } = useDashboard();

    return (
        <DashboardContextProvider
            energyType={energyType}
            setEnergyType={setEnergyType}
            availableEnergySources={availableEnergySources}
            setAvailableEnergySources={setAvailableEnergySources}
        >
            <div>
                <EnergySourceSelector />
            </div>
        </DashboardContextProvider>
    );
};

export default Dashboard;
