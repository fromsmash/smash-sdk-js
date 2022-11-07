export interface UpdateAccountInput {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    language?: string;
}

export interface UpdateAccountOutput {
    account: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        region: string;
        language: string;
        created: string;
        modified: string;
    };
}
