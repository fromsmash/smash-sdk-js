export interface VerifyVatNumberInput {
    vatNumber: string;
    countryCode: string;
    warmupDate?: string;
}

export interface VerifyVatNumberOutput {
    vatNumber: {
        valid: boolean;
        vatNumber: string;
        countryCode: string;
        warmupDate: string;
    };
}
