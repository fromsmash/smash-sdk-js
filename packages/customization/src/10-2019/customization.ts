import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { GetTeamCustomizationInput, GetTeamCustomizationOutput } from "./types/GetTeamCustomization/GetTeamCustomization";
import { GetTeamCustomizationResponse } from "./types/GetTeamCustomization/GetTeamCustomizationResponse";
export * from "./types/GetTeamCustomization/GetTeamCustomization";
import { ListTeamCustomizationsInput, ListTeamCustomizationsOutput } from "./types/ListTeamCustomizations/ListTeamCustomizations";
import { ListTeamCustomizationsResponse } from "./types/ListTeamCustomizations/ListTeamCustomizationsResponse";
export * from "./types/ListTeamCustomizations/ListTeamCustomizations";

const endpoints = {
    "ca-central-1": "https://customization.ca-central-1.fromsmash.co",
    "eu-central-1": "https://customization.eu-central-1.fromsmash.co",
    "eu-west-1": "https://customization.eu-west-1.fromsmash.co",
    "eu-west-2": "https://customization.eu-west-2.fromsmash.co",
    "eu-west-3": "https://customization.eu-west-3.fromsmash.co",
    "us-east-1": "https://customization.us-east-1.fromsmash.co",
    "us-east-2": "https://customization.us-east-2.fromsmash.co",
    "us-west-1": "https://customization.us-west-1.fromsmash.co",
    "us-west-2": "https://customization.us-west-2.fromsmash.co",
};

config.setHosts("customization", endpoints);

export class Customization extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "customization", ...params, type: "regional", userAgent: "@smash-sdk/customization@0.0.1" });
    }

    getTeamCustomization(params: GetTeamCustomizationInput): Promise<GetTeamCustomizationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/customization/:customizationId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        customizationId: params["customizationId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamCustomizationResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamCustomizationResponse, GetTeamCustomizationOutput>(response, this.errors.GetTeamCustomizationError);
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

    listTeamCustomizations(params: ListTeamCustomizationsInput): Promise<ListTeamCustomizationsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/customizations",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamCustomizationsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamCustomizationsResponse, ListTeamCustomizationsOutput>(response, this.errors.ListTeamCustomizationsError);
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
