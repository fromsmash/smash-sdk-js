export interface ChangePasswordInput {
    password: string;
    username: string;
    account?: string;
    secret: string;
    id: string;
}

export interface ChangePasswordOutput {}
