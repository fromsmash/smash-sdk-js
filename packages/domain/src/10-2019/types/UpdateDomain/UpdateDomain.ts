export interface UpdateDomainInput {
    domainId: string;
    domain?: string;
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
            accessTracking: {
                active: boolean;
                default: string;
            };
        };
        redirection?: {
            active: boolean;
            value: string;
            options: string[];
        };
    };
}

export interface UpdateDomainOutput {
    domain: {
        team: string;
        domain: string;
        region: string;
        options: string;
    };
}
