export interface ListDomainsInput {}

export interface ListDomainsOutput {
    domains: {
        team: string;
        domain: string;
        region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
        options: {
            transfer: {
                authentication: {
                    active: boolean;
                    target?: string;
                };
                availabilityDuration: {
                    active: boolean;
                    default: number;
                    max: number;
                    min: number;
                };
                customization: {
                    active: boolean;
                };
                delivery: {
                    active: boolean;
                    default: "Email" | "Link";
                    options: [] | ["Email"] | ["Link"] | ["Link", "Email"];
                };
                notificationType: {
                    active: boolean;
                    default: "None" | "All" | "Download" | "Transfer";
                    options: [] | ["None"] | ["All"] | ["All", "None"] | ["Download"] | ["Download", "None"] | ["Download", "All"] | ["Download", "All", "None"] | ["Transfer"] | ["Transfer", "None"] | ["Transfer", "All"] | ["Transfer", "All", "None"] | ["Transfer", "Download"] | ["Transfer", "Download", "None"] | ["Transfer", "Download", "All"] | ["Transfer", "Download", "All", "None"];
                };
                password: {
                    active: boolean;
                    required?: boolean;
                    minLength: number;
                };
                preview: {
                    active: boolean;
                    default: "Full" | "None";
                    options: [] | ["Full"] | ["None"] | ["None", "Full"];
                };
                promotion: {
                    active: boolean;
                };
                accessTracking: {
                    active: boolean;
                    default: "None" | "Email";
                };
            };
            redirection: {
                active: boolean;
                value: "None" | "RedirectToSignin" | "RedirectToProvider";
                options: [] | ["None"] | ["RedirectToSignin"] | ["RedirectToSignin", "None"] | ["RedirectToProvider"] | ["RedirectToProvider", "None"] | ["RedirectToProvider", "RedirectToSignin"] | ["RedirectToProvider", "RedirectToSignin", "None"];
            };
        };
    }[];
}
