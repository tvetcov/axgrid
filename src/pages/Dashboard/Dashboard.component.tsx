import { FieldDefinitions } from 'services/api.types';
import EnergySourcesOrders from './components/EnergySourcesOrders';
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
        setFilteredEnergySources,
        addEnergySource
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
            addEnergySource={addEnergySource}
        >
            <EnergySourcesOrders />
        </DashboardContextProvider>
    );
};

export default Dashboard;
