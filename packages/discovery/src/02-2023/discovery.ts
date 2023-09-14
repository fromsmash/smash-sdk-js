import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { ListPublicServicesInput, ListPublicServicesOutput } from "./types/ListPublicServices/ListPublicServices";
import { ListPublicServicesResponse } from "./types/ListPublicServices/ListPublicServicesResponse";
export * from "./types/ListPublicServices/ListPublicServices";

const endpoints = {
    "ca-central-1": "https://discovery.ca-central-1.fromsmash.co",
    "eu-central-1": "https://discovery.eu-central-1.fromsmash.co",
    "eu-west-1": "https://discovery.eu-west-1.fromsmash.co",
    "eu-west-2": "https://discovery.eu-west-2.fromsmash.co",
    "eu-west-3": "https://discovery.eu-west-3.fromsmash.co",
    "us-east-1": "https://discovery.us-east-1.fromsmash.co",
    "us-east-2": "https://discovery.us-east-2.fromsmash.co",
    "us-west-1": "https://discovery.us-west-1.fromsmash.co",
    "us-west-2": "https://discovery.us-west-2.fromsmash.co",
};

config.setHosts("discovery", endpoints);

export class Discovery extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "discovery", ...params, type: "regional", userAgent: "@smash-sdk/discovery@0.0.10" });
    }

    listPublicServices(): Promise<ListPublicServicesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/namespace/public/services",
                    headers: {},
                    pathParameters: {},
                    queryParameters: {
                        version: "02-2023",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListPublicServicesResponse>(request);
                const parsedResponse = this.parseResponse<ListPublicServicesResponse, ListPublicServicesOutput>(response, this.errors.ListPublicServicesError);
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
