export interface UpdateInformationsInput {
    city: string;
    state?: string;
    stateCode?: string;
    country: string;
    zipCode: string;
    company?: string;
    address: string;
    lastName: string;
    firstName: string;
    vatNumber?: string;
    countryCode: string;
}

export interface UpdateInformationsOutput {
    informations: {
        city: string;
        state: string;
        country: string;
        zipCode: string;
        company: string;
        address: string;
        lastName: string;
        firstName: string;
        vatNumber: string;
        stateCode: string;
        countryCode: string;
    };
}
