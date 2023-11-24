import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { CreateEmailChallengeInput, CreateEmailChallengeOutput } from "./types/CreateEmailChallenge/CreateEmailChallenge";
import { CreateEmailChallengeResponse } from "./types/CreateEmailChallenge/CreateEmailChallengeResponse";
export * from "./types/CreateEmailChallenge/CreateEmailChallenge";
import { GetEmailChallengeInput, GetEmailChallengeOutput } from "./types/GetEmailChallenge/GetEmailChallenge";
import { GetEmailChallengeResponse } from "./types/GetEmailChallenge/GetEmailChallengeResponse";
export * from "./types/GetEmailChallenge/GetEmailChallenge";
import { UpdateEmailChallengeInput, UpdateEmailChallengeOutput } from "./types/UpdateEmailChallenge/UpdateEmailChallenge";
import { UpdateEmailChallengeResponse } from "./types/UpdateEmailChallenge/UpdateEmailChallengeResponse";
export * from "./types/UpdateEmailChallenge/UpdateEmailChallenge";

const endpoints = {
    "ca-central-1": "https://kyc.ca-central-1.fromsmash.co",
    "eu-central-1": "https://kyc.eu-central-1.fromsmash.co",
    "eu-west-1": "https://kyc.eu-west-1.fromsmash.co",
    "eu-west-2": "https://kyc.eu-west-2.fromsmash.co",
    "eu-west-3": "https://kyc.eu-west-3.fromsmash.co",
    "us-east-1": "https://kyc.us-east-1.fromsmash.co",
    "us-east-2": "https://kyc.us-east-2.fromsmash.co",
    "us-west-1": "https://kyc.us-west-1.fromsmash.co",
    "us-west-2": "https://kyc.us-west-2.fromsmash.co",
};

config.setHosts("kyc", endpoints);

export class Kyc extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "kyc", ...params, type: "regional", userAgent: "@smash-sdk/kyc@0.0.1" });
    }

    createEmailChallenge(params: CreateEmailChallengeInput): Promise<CreateEmailChallengeOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/emailChallenge/:email",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        email: params["email"],
                    },
                    queryParameters: {
                        language: params["language"],
                        version: "11-2023",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateEmailChallengeResponse>(request);
                const parsedResponse = this.parseResponse<CreateEmailChallengeResponse, CreateEmailChallengeOutput>(response, this.errors.CreateEmailChallengeError);
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

    getEmailChallenge(params: GetEmailChallengeInput): Promise<GetEmailChallengeOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/emailChallenge/:email",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        email: params["email"],
                    },
                    queryParameters: {
                        version: "11-2023",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetEmailChallengeResponse>(request);
                const parsedResponse = this.parseResponse<GetEmailChallengeResponse, GetEmailChallengeOutput>(response, this.errors.GetEmailChallengeError);
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

    updateEmailChallenge(params: UpdateEmailChallengeInput): Promise<UpdateEmailChallengeOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/emailChallenge/:email",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        email: params["email"],
                    },
                    queryParameters: {
                        version: "11-2023",
                    },

                    bodyParameters: {
                        token: params["token"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateEmailChallengeResponse>(request);
                const parsedResponse = this.parseResponse<UpdateEmailChallengeResponse, UpdateEmailChallengeOutput>(response, this.errors.UpdateEmailChallengeError);
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
