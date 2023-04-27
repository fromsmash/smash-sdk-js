export interface DeleteAccountInput {}

export interface DeleteAccountOutput {
    account: {
        id: string;
        username: string;
        region: string;
        created: string;
        modified: string;
        removeAt: string;
    };
}
