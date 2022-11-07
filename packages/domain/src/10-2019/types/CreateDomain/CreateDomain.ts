export interface CreateDomainInput {
    domain: string;
    options?: {
        transfer?: {
            authentication: {
                active: boolean;
                target?: string;
            };
            availabilityDuration: {
                active: boolean;
                default: number;
            };
            customization: {
                active: boolean;
            };
            delivery: {
                active: boolean;
                default: string;
                options: string[];
            };
            notificationType: {
                active: boolean;
                default: string;
                options: string[];
            };
            password: {
                active: boolean;
                required?: boolean;
                minLength: number;
            };
            preview: {
                active: boolean;
                default: string;
                options: string[];
            };
            promotion: {
                active: boolean;
            };
        };
        redirection?: {
            active: boolean;
            value: string;
            options: string[];
        };
    };
}

export interface CreateDomainOutput {
    domain: {
        team: string;
        region: string;
        domain: string;
        options: string;
    };
}
