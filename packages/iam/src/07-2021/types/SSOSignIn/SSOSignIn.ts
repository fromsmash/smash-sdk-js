export interface SSOSignInInput {
    username: string;
}

export interface SSOSignInOutput {
    providers: {
        idpUrl: string;
    }[];
}
