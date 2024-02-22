import { FieldDefinitions } from 'services/api.types';
import EnergySourceSelector from './components/EnergySourceSelector';
import DashboardContextProvider from './context/DashboardContext.provider';
import useDashboard from './useDashboard.hook';

const Dashboard = () => {
    const {
        fieldDefinitions,
        energyType,
        setEnergyType,
        availableEnergySources,
        setAvailableEnergySources,
        filteredEnergySources,
        setFilteredEnergySources
    } = useDashboard();

    return (
        <DashboardContextProvider
            fieldDefinitions={fieldDefinitions as FieldDefinitions}
            energyType={energyType}
            setEnergyType={setEnergyType}
            availableEnergySources={availableEnergySources}
            setAvailableEnergySources={setAvailableEnergySources}
            filteredEnergySources={filteredEnergySources}
            setFilteredEnergySources={setFilteredEnergySources}
        >
            <EnergySourceSelector />
        </DashboardContextProvider>
    );
};

export default Dashboard;
