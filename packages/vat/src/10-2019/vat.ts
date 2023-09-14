import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { ComputeVatInput, ComputeVatOutput } from "./types/ComputeVat/ComputeVat";
import { ComputeVatResponse } from "./types/ComputeVat/ComputeVatResponse";
export * from "./types/ComputeVat/ComputeVat";
import { ListCountriesInput, ListCountriesOutput } from "./types/ListCountries/ListCountries";
import { ListCountriesResponse } from "./types/ListCountries/ListCountriesResponse";
export * from "./types/ListCountries/ListCountries";
import { VerifyVatNumberInput, VerifyVatNumberOutput } from "./types/VerifyVatNumber/VerifyVatNumber";
import { VerifyVatNumberResponse } from "./types/VerifyVatNumber/VerifyVatNumberResponse";
export * from "./types/VerifyVatNumber/VerifyVatNumber";

const endpoints = {
    "ca-central-1": "https://vat.ca-central-1.fromsmash.co",
    "eu-central-1": "https://vat.eu-central-1.fromsmash.co",
    "eu-west-1": "https://vat.eu-west-1.fromsmash.co",
    "eu-west-2": "https://vat.eu-west-2.fromsmash.co",
    "eu-west-3": "https://vat.eu-west-3.fromsmash.co",
    "us-east-1": "https://vat.us-east-1.fromsmash.co",
    "us-east-2": "https://vat.us-east-2.fromsmash.co",
    "us-west-1": "https://vat.us-west-1.fromsmash.co",
    "us-west-2": "https://vat.us-west-2.fromsmash.co",
};

config.setHosts("vat", endpoints);

export class Vat extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "vat", ...params, type: "regional", userAgent: "@smash-sdk/vat@0.0.4" });
    }

    computeVat(params: ComputeVatInput): Promise<ComputeVatOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/vat/compute",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        vatNumber: params["vatNumber"],
                        priceExclTax: params["priceExclTax"],
                        priceInclTax: params["priceInclTax"],
                        countryCode: params["countryCode"],
                        bypassVatCheck: params["bypassVatCheck"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ComputeVatResponse>(request);
                const parsedResponse = this.parseResponse<ComputeVatResponse, ComputeVatOutput>(response, this.errors.ComputeVatError);
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

    listCountries(): Promise<ListCountriesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/countries",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListCountriesResponse>(request);
                const parsedResponse = this.parseResponse<ListCountriesResponse, ListCountriesOutput>(response, this.errors.ListCountriesError);
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

    verifyVatNumber(params: VerifyVatNumberInput): Promise<VerifyVatNumberOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/vatNumber/verify",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        vatNumber: params["vatNumber"],
                        countryCode: params["countryCode"],
                        warmupDate: params["warmupDate"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<VerifyVatNumberResponse>(request);
                const parsedResponse = this.parseResponse<VerifyVatNumberResponse, VerifyVatNumberOutput>(response, this.errors.VerifyVatNumberError);
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
