export interface GetSigninConfigurationInput {
    username: string;
}

export interface GetSigninConfigurationOutput {
    configuration: {
        type: "SSO" | "Standard";
        username: string;
        providers: {
            type: "OpenId" | "Saml";
            idpUrl: string;
            status: string;
        }[];
        region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
    };
}
