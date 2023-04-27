export interface ResetPasswordInput {
    password: string;
    account?: string;
    secret: string;
    id: string;
}

export interface ResetPasswordOutput {}
