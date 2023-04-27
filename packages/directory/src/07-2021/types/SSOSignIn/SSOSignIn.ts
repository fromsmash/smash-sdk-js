export interface SSOSignInInput {
    username: string;
}

export interface SSOSignInOutput {
    providers: {
        idpUrl: string;
    }[];

    region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
}
