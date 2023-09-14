import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { ChangePasswordInput, ChangePasswordOutput } from "./types/ChangePassword/ChangePassword";
import { ChangePasswordResponse } from "./types/ChangePassword/ChangePasswordResponse";
export * from "./types/ChangePassword/ChangePassword";
import { CreateTokenInput, CreateTokenOutput } from "./types/CreateToken/CreateToken";
import { CreateTokenResponse } from "./types/CreateToken/CreateTokenResponse";
export * from "./types/CreateToken/CreateToken";
import { ForgotPasswordInput, ForgotPasswordOutput } from "./types/ForgotPassword/ForgotPassword";
import { ForgotPasswordResponse } from "./types/ForgotPassword/ForgotPasswordResponse";
export * from "./types/ForgotPassword/ForgotPassword";
import { GetSigninConfigurationInput, GetSigninConfigurationOutput } from "./types/GetSigninConfiguration/GetSigninConfiguration";
import { GetSigninConfigurationResponse } from "./types/GetSigninConfiguration/GetSigninConfigurationResponse";
export * from "./types/GetSigninConfiguration/GetSigninConfiguration";
import { ResetPasswordInput, ResetPasswordOutput } from "./types/ResetPassword/ResetPassword";
import { ResetPasswordResponse } from "./types/ResetPassword/ResetPasswordResponse";
export * from "./types/ResetPassword/ResetPassword";
import { SSOSignInInput, SSOSignInOutput } from "./types/SSOSignIn/SSOSignIn";
import { SSOSignInResponse } from "./types/SSOSignIn/SSOSignInResponse";
export * from "./types/SSOSignIn/SSOSignIn";

const endpoints = {
    global: "https://directory.fromsmash.co",
};

config.setHosts("directory", endpoints);

export class Directory extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "directory", ...params, type: "global", userAgent: "@smash-sdk/directory@0.0.3" });
    }

    changePassword(params: ChangePasswordInput): Promise<ChangePasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/change",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "07-2021",
                    },

                    bodyParameters: {
                        password: params["password"],
                        username: params["username"],
                        account: params["account"],
                        secret: params["secret"],
                        id: params["id"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ChangePasswordResponse>(request);
                const parsedResponse = this.parseResponse<ChangePasswordResponse, ChangePasswordOutput>(response, this.errors.ChangePasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    createToken(params: CreateTokenInput): Promise<CreateTokenOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/token",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "07-2021",
                    },

                    bodyParameters: {
                        username: params["username"],
                        password: params["password"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTokenResponse>(request);
                const parsedResponse = this.parseResponse<CreateTokenResponse, CreateTokenOutput>(response, this.errors.CreateTokenError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    forgotPassword(params: ForgotPasswordInput): Promise<ForgotPasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/forgot",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "07-2021",
                    },

                    bodyParameters: {
                        username: params["username"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ForgotPasswordResponse>(request);
                const parsedResponse = this.parseResponse<ForgotPasswordResponse, ForgotPasswordOutput>(response, this.errors.ForgotPasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    getSigninConfiguration(params: GetSigninConfigurationInput): Promise<GetSigninConfigurationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/signin/configuration/:username",
                    headers: {},
                    pathParameters: {
                        username: params["username"],
                    },
                    queryParameters: {
                        version: "07-2021",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetSigninConfigurationResponse>(request);
                const parsedResponse = this.parseResponse<GetSigninConfigurationResponse, GetSigninConfigurationOutput>(response, this.errors.GetSigninConfigurationError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    resetPassword(params: ResetPasswordInput): Promise<ResetPasswordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/password/reset",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "07-2021",
                    },

                    bodyParameters: {
                        password: params["password"],
                        username: params["username"],
                        account: params["account"],
                        secret: params["secret"],
                        id: params["id"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ResetPasswordResponse>(request);
                const parsedResponse = this.parseResponse<ResetPasswordResponse, ResetPasswordOutput>(response, this.errors.ResetPasswordError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }

    sSOSignIn(params: SSOSignInInput): Promise<SSOSignInOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/sso/signin",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "07-2021",
                    },

                    bodyParameters: {
                        username: params["username"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<SSOSignInResponse>(request);
                const parsedResponse = this.parseResponse<SSOSignInResponse, SSOSignInOutput>(response, this.errors.SSOSignInError);
                resolve(parsedResponse);
            } catch (error) {
                if (error instanceof Error) {
                    if (error instanceof SDKError) {
                        reject(error);
                    } else {
                        reject(new SDKError(error));
                    }
                } else {
                    reject(new SDKError(error as string));
                }
            }
        });
    }
}
