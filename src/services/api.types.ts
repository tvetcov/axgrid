export enum ENERGY_SOURCE {
    Solar = 'Solar',
    Gas = 'Gas',
    Wind = 'Wind',
    Hydro = 'Hydro',
    Kinetic = 'Kinetic',
    Thermal = 'Thermal'
}

export interface EnergySource {
    id: number;
    source: ENERGY_SOURCE;
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
