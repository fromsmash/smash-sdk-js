import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { ListManagedThemesPublicInput, ListManagedThemesPublicOutput } from "./types/ListManagedThemesPublic/ListManagedThemesPublic";
import { ListManagedThemesPublicResponse } from "./types/ListManagedThemesPublic/ListManagedThemesPublicResponse";
export * from "./types/ListManagedThemesPublic/ListManagedThemesPublic";

const endpoints = {
    global: "https://theme.fromsmash.co",
};

config.setHosts("theme", endpoints, false);

export class Theme extends Client {
    public errors = errors;
    static errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "theme", ...params, type: "global", userAgent: "@smash-sdk/theme@0.0.1" });
    }

    listManagedThemesPublic(): Promise<ListManagedThemesPublicOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/managedThemes/public",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "04-2024",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListManagedThemesPublicResponse>(request);
                const parsedResponse = this.parseResponse<ListManagedThemesPublicResponse, ListManagedThemesPublicOutput>(response, this.errors.ListManagedThemesPublicError);
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
