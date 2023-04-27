export interface ListPublicServicesInput {}

export interface ListPublicServicesOutput {
    services: {
        region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
        name: string;
        ttl: number;
        url: string;
    }[];

    region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
    country: string;
    countryCode: string;
}
