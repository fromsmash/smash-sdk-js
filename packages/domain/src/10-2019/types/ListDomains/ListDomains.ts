export interface ListDomainsInput {}

export interface ListDomainsOutput {
    domains: {
        team: string;
        domain: string;
        region: string;
        options: string;
    }[];
}
