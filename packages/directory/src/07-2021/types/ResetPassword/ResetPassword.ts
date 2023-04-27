export interface ResetPasswordInput {
    password: string;
    username: string;
    account?: string;
    secret: string;
    id: string;
}

export interface ResetPasswordOutput {}
