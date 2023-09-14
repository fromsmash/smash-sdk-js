import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { GetTeamPromotionInput, GetTeamPromotionOutput } from "./types/GetTeamPromotion/GetTeamPromotion";
import { GetTeamPromotionResponse } from "./types/GetTeamPromotion/GetTeamPromotionResponse";
export * from "./types/GetTeamPromotion/GetTeamPromotion";
import { ListTeamPromotionsInput, ListTeamPromotionsOutput } from "./types/ListTeamPromotions/ListTeamPromotions";
import { ListTeamPromotionsResponse } from "./types/ListTeamPromotions/ListTeamPromotionsResponse";
export * from "./types/ListTeamPromotions/ListTeamPromotions";
import { ListTeamPromotionsExternalInput, ListTeamPromotionsExternalOutput } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternal";
import { ListTeamPromotionsExternalResponse } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalResponse";
export * from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternal";

const endpoints = {
    "ca-central-1": "https://promotion.ca-central-1.fromsmash.co",
    "eu-central-1": "https://promotion.eu-central-1.fromsmash.co",
    "eu-west-1": "https://promotion.eu-west-1.fromsmash.co",
    "eu-west-2": "https://promotion.eu-west-2.fromsmash.co",
    "eu-west-3": "https://promotion.eu-west-3.fromsmash.co",
    "us-east-1": "https://promotion.us-east-1.fromsmash.co",
    "us-east-2": "https://promotion.us-east-2.fromsmash.co",
    "us-west-1": "https://promotion.us-west-1.fromsmash.co",
    "us-west-2": "https://promotion.us-west-2.fromsmash.co",
};

config.setHosts("promotion", endpoints);

export class Promotion extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "promotion", ...params, type: "regional", userAgent: "@smash-sdk/promotion@0.0.1" });
    }

    getTeamPromotion(params: GetTeamPromotionInput): Promise<GetTeamPromotionOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/promotion/:promotionId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        promotionId: params["promotionId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamPromotionResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamPromotionResponse, GetTeamPromotionOutput>(response, this.errors.GetTeamPromotionError);
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

    listTeamPromotions(params: ListTeamPromotionsInput): Promise<ListTeamPromotionsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/promotions",
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
                const response = await this.handle<ListTeamPromotionsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamPromotionsResponse, ListTeamPromotionsOutput>(response, this.errors.ListTeamPromotionsError);
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

    listTeamPromotionsExternal(params: ListTeamPromotionsExternalInput): Promise<ListTeamPromotionsExternalOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/promotions/external",
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
                const response = await this.handle<ListTeamPromotionsExternalResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamPromotionsExternalResponse, ListTeamPromotionsExternalOutput>(response, this.errors.ListTeamPromotionsExternalError);
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
