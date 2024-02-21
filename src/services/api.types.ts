export enum ENERGY_SOURCE_ID {
    Solar = 'Solar',
    Gas = 'Gas',
    Wind = 'Wind',
    Hydro = 'Hydro',
    Kinetic = 'Kinetic',
    Thermal = 'Thermal'
}

export interface EnergySource {
    id: number;
    source: ENERGY_SOURCE_ID;
    price: string;
    minimumPurchaseQuantity: number;
    contractTerms: ContractTerms;
    paymentTerms: PaymentTerms;
}

interface ContractTerms {
    duration: string;
    penalty: string;
    legalConditions: string;
}

interface PaymentTerms {
    paymentMethod: string;
    paymentDate: string;
}
