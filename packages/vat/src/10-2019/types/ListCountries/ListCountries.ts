export interface ListCountriesInput {}

export interface ListCountriesOutput {
    countries: {
        eu: boolean;
        label: string;
        vatCode: string;
        countryCode: string;
        states: {
            label: string;
            stateCode: string;
        }[];
        percent: number;
        related: string;
        currency: "eur" | "usd";
        translations: { [key: string]: unknown };
    }[];
}
