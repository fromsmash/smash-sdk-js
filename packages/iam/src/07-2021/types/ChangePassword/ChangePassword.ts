export interface ChangePasswordInput {
    password: string;
    account?: string;
    secret: string;
    id: string;
}

export interface ChangePasswordOutput {}
