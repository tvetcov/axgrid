export enum ENERGY_SOURCE_ID {
    Solar = 'Solar',
    Gas = 'Gas',
    Wind = 'Wind',
    Hydro = 'Hydro',
    Kinetic = 'Kinetic',
    Thermal = 'Thermal'
}

export enum FIELD_TYPES {
    TextFieldData = 'TextFieldData',
    ChartFieldData = 'ChartFieldData'
}

export enum FIELD_SUBTYPES {
    geolocation = 'geolocation',
    line = 'line',
    boxplot = 'boxplot',
    link = 'link',
    dateTime = 'dateTime'
}

export type FieldDefinitionItem = {
    id: number;
    name: string;
    type: FIELD_TYPES;
    subType: FIELD_SUBTYPES;
};

export type FieldDefinitions = Record<ENERGY_SOURCE_ID, FieldDefinitionItem[]>;

interface CustomField {
    id: number;
    value: CustomFieldValue;
}

export type CustomFieldValue = string | ChartFieldValue;

export type ChartFieldValue = { label: string; value: string | string[] }[];

export interface EnergySource {
    id: number;
    source: ENERGY_SOURCE_ID;
    price: string;
    minimumPurchaseQuantity: number;
    contractTerms: ContractTerms;
    paymentTerms: PaymentTerms;
    customFields: CustomField[];
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
