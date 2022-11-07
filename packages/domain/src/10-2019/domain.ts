import { Client } from "smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";
import { CreateDomainInput, CreateDomainOutput } from "./types/CreateDomain/CreateDomain";
import { CreateDomainResponse } from "./types/CreateDomain/CreateDomainResponse";
export * from "./types/CreateDomain/CreateDomain";
import { DeleteDomainInput, DeleteDomainOutput } from "./types/DeleteDomain/DeleteDomain";
import { DeleteDomainResponse } from "./types/DeleteDomain/DeleteDomainResponse";
export * from "./types/DeleteDomain/DeleteDomain";
import { DeleteDomainCustomizationInput, DeleteDomainCustomizationOutput } from "./types/DeleteDomainCustomization/DeleteDomainCustomization";
import { DeleteDomainCustomizationResponse } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationResponse";
export * from "./types/DeleteDomainCustomization/DeleteDomainCustomization";
import { GetDomainInput, GetDomainOutput } from "./types/GetDomain/GetDomain";
import { GetDomainResponse } from "./types/GetDomain/GetDomainResponse";
export * from "./types/GetDomain/GetDomain";
import { GetDomainCustomizationInput, GetDomainCustomizationOutput } from "./types/GetDomainCustomization/GetDomainCustomization";
import { GetDomainCustomizationResponse } from "./types/GetDomainCustomization/GetDomainCustomizationResponse";
export * from "./types/GetDomainCustomization/GetDomainCustomization";
import { GetRecordInput, GetRecordOutput } from "./types/GetRecord/GetRecord";
import { GetRecordResponse } from "./types/GetRecord/GetRecordResponse";
export * from "./types/GetRecord/GetRecord";
import { ListDomainsInput, ListDomainsOutput } from "./types/ListDomains/ListDomains";
import { ListDomainsResponse } from "./types/ListDomains/ListDomainsResponse";
export * from "./types/ListDomains/ListDomains";
import { ListRecordProvidersInput, ListRecordProvidersOutput } from "./types/ListRecordProviders/ListRecordProviders";
import { ListRecordProvidersResponse } from "./types/ListRecordProviders/ListRecordProvidersResponse";
export * from "./types/ListRecordProviders/ListRecordProviders";
import { UpdateDomainInput, UpdateDomainOutput } from "./types/UpdateDomain/UpdateDomain";
import { UpdateDomainResponse } from "./types/UpdateDomain/UpdateDomainResponse";
export * from "./types/UpdateDomain/UpdateDomain";
import { UpdateDomainCustomizationInput, UpdateDomainCustomizationOutput } from "./types/UpdateDomainCustomization/UpdateDomainCustomization";
import { UpdateDomainCustomizationResponse } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationResponse";
export * from "./types/UpdateDomainCustomization/UpdateDomainCustomization";

const endpoints = {
    global: "https://domain.fromsmash.co",
};

config.setHosts("domain", endpoints);

export class Domain extends Client {
    public errors = errors;

    constructor(params: ClientParameters) {
        super({ service: "domain", ...params });
    }

    createDomain(params: CreateDomainInput): Promise<CreateDomainOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/domain",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },
                    bodyParameters: {
                        domain: params.domain,
                        options: params.options,
                    },

                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<CreateDomainResponse>(request);
                const parsedResponse = this.parseResponse<CreateDomainResponse, CreateDomainOutput>(response, this.errors.CreateDomainError);
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

    deleteDomain(params: DeleteDomainInput): Promise<DeleteDomainOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/domain/:domain",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domain: params.domain,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<DeleteDomainResponse>(request);
                const parsedResponse = this.parseResponse<DeleteDomainResponse, DeleteDomainOutput>(response, this.errors.DeleteDomainError);
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

    deleteDomainCustomization(params: DeleteDomainCustomizationInput): Promise<DeleteDomainCustomizationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/domain/:domain/customization",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domain: params.domain,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<DeleteDomainCustomizationResponse>(request);
                const parsedResponse = this.parseResponse<DeleteDomainCustomizationResponse, DeleteDomainCustomizationOutput>(response, this.errors.DeleteDomainCustomizationError);
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

    getDomain(params: GetDomainInput): Promise<GetDomainOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/domain/:domain",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domain: params.domain,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<GetDomainResponse>(request);
                const parsedResponse = this.parseResponse<GetDomainResponse, GetDomainOutput>(response, this.errors.GetDomainError);
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

    getDomainCustomization(params: GetDomainCustomizationInput): Promise<GetDomainCustomizationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/domain/:domain/customization",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domain: params.domain,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<GetDomainCustomizationResponse>(request);
                const parsedResponse = this.parseResponse<GetDomainCustomizationResponse, GetDomainCustomizationOutput>(response, this.errors.GetDomainCustomizationError);
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

    getRecord(params: GetRecordInput): Promise<GetRecordOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/record/:name",
                    headers: {},
                    pathParameters: {
                        name: params.name,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<GetRecordResponse>(request);
                const parsedResponse = this.parseResponse<GetRecordResponse, GetRecordOutput>(response, this.errors.GetRecordError);
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

    listDomains(params: ListDomainsInput): Promise<ListDomainsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/domains",
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
                const response = await this.client.handle<ListDomainsResponse>(request);
                const parsedResponse = this.parseResponse<ListDomainsResponse, ListDomainsOutput>(response, this.errors.ListDomainsError);
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

    listRecordProviders(params: ListRecordProvidersInput): Promise<ListRecordProvidersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/record/:name/providers",
                    headers: {},
                    pathParameters: {
                        name: params.name,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<ListRecordProvidersResponse>(request);
                const parsedResponse = this.parseResponse<ListRecordProvidersResponse, ListRecordProvidersOutput>(response, this.errors.ListRecordProvidersError);
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

    updateDomain(params: UpdateDomainInput): Promise<UpdateDomainOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/domain/:domainId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domainId: params.domainId,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    bodyParameters: {
                        domain: params.domain,
                        options: params.options,
                    },

                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<UpdateDomainResponse>(request);
                const parsedResponse = this.parseResponse<UpdateDomainResponse, UpdateDomainOutput>(response, this.errors.UpdateDomainError);
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

    updateDomainCustomization(params: UpdateDomainCustomizationInput): Promise<UpdateDomainCustomizationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/domain/:domain/customization",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        domain: params.domain,
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    bodyParameters: {
                        logo: params.logo,
                        background: params.background,
                    },

                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.client.handle<UpdateDomainCustomizationResponse>(request);
                const parsedResponse = this.parseResponse<UpdateDomainCustomizationResponse, UpdateDomainCustomizationOutput>(response, this.errors.UpdateDomainCustomizationError);
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
