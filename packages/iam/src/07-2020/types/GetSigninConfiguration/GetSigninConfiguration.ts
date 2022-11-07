export interface GetSigninConfigurationInput {
    username: string;
}

export interface GetSigninConfigurationOutput {
    configuration: {
        type: string;
        username: string;
        providers: {
            type: string;
            idpUrl: string;
            status: string;
        }[];
    };
}
