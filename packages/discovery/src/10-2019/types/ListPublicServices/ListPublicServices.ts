export interface ListPublicServicesInput {}

export interface ListPublicServicesOutput {
    services: {
        service: string;
        region: string;
        name: string;
        ttl: number;
        url: string;
    }[];

    region: string;
    country: string;
    countryCode: string;
}
