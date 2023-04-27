export interface GetInformationsInput {}

export interface GetInformationsOutput {
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
