export interface ComputeVatInput {
    vatNumber?: string;
    priceExclTax?: number;
    priceInclTax?: number;
    countryCode: string;
    bypassVatCheck?: boolean;
}

export interface ComputeVatOutput {
    vat: {
        vat: number;
        vatRule: "Vat Not Applicable" | "Vat Applicable" | "Reverse Charge" | "Mini One Stop Shop";
        percent: number;
        vatNumber?: string;
        countryCode: string;
        priceExclTax: number;
        priceInclTax: number;
    };
}
