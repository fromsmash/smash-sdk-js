import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { CreateImageInput, CreateImageOutput } from "./types/CreateImage/CreateImage";
import { CreateImageResponse } from "./types/CreateImage/CreateImageResponse";
export * from "./types/CreateImage/CreateImage";
import { GetImageInput, GetImageOutput } from "./types/GetImage/GetImage";
import { GetImageResponse } from "./types/GetImage/GetImageResponse";
export * from "./types/GetImage/GetImage";

const endpoints = {
    "ca-central-1": "https://image.ca-central-1.fromsmash.co",
    "eu-central-1": "https://image.eu-central-1.fromsmash.co",
    "eu-west-1": "https://image.eu-west-1.fromsmash.co",
    "eu-west-2": "https://image.eu-west-2.fromsmash.co",
    "eu-west-3": "https://image.eu-west-3.fromsmash.co",
    "us-east-1": "https://image.us-east-1.fromsmash.co",
    "us-east-2": "https://image.us-east-2.fromsmash.co",
    "us-west-1": "https://image.us-west-1.fromsmash.co",
    "us-west-2": "https://image.us-west-2.fromsmash.co",
};

config.setHosts("image", endpoints);

export class Image extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "image", ...params, type: "regional", userAgent: "@smash-sdk/image@0.0.1" });
    }

    createImage(params: CreateImageInput = {}): Promise<CreateImageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/image",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        ttl: params["ttl"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateImageResponse>(request);
                const parsedResponse = this.parseResponse<CreateImageResponse, CreateImageOutput>(response, this.errors.CreateImageError);
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

    getImage(params: GetImageInput): Promise<GetImageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/image/:imageId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        imageId: params["imageId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetImageResponse>(request);
                const parsedResponse = this.parseResponse<GetImageResponse, GetImageOutput>(response, this.errors.GetImageError);
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
