export interface GetSigninConfigurationInput {
    username: string;
}

export interface GetSigninConfigurationOutput {
    configuration: {
        type: "SSO" | "Standard";
        username: string;
        providers: {
            type: "Saml" | "OpenId";
            idpUrl: string;
            status: "Enabled" | "Disabled";
        }[];
    };
}
