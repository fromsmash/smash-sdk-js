import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { DeleteLinkInput, DeleteLinkOutput } from "./types/DeleteLink/DeleteLink";
import { DeleteLinkResponse } from "./types/DeleteLink/DeleteLinkResponse";
export * from "./types/DeleteLink/DeleteLink";
import { GetLinkInput, GetLinkOutput } from "./types/GetLink/GetLink";
import { GetLinkResponse } from "./types/GetLink/GetLinkResponse";
export * from "./types/GetLink/GetLink";
import { GetTargetInput, GetTargetOutput } from "./types/GetTarget/GetTarget";
import { GetTargetResponse } from "./types/GetTarget/GetTargetResponse";
export * from "./types/GetTarget/GetTarget";
import { GetTeamLinkInput, GetTeamLinkOutput } from "./types/GetTeamLink/GetTeamLink";
import { GetTeamLinkResponse } from "./types/GetTeamLink/GetTeamLinkResponse";
export * from "./types/GetTeamLink/GetTeamLink";
import { GetUserLinkInput, GetUserLinkOutput } from "./types/GetUserLink/GetUserLink";
import { GetUserLinkResponse } from "./types/GetUserLink/GetUserLinkResponse";
export * from "./types/GetUserLink/GetUserLink";
import { ListLinksInput, ListLinksOutput } from "./types/ListLinks/ListLinks";
import { ListLinksResponse } from "./types/ListLinks/ListLinksResponse";
export * from "./types/ListLinks/ListLinks";
import { ListTeamLinksInput, ListTeamLinksOutput } from "./types/ListTeamLinks/ListTeamLinks";
import { ListTeamLinksResponse } from "./types/ListTeamLinks/ListTeamLinksResponse";
export * from "./types/ListTeamLinks/ListTeamLinks";
import { ListUserLinksInput, ListUserLinksOutput } from "./types/ListUserLinks/ListUserLinks";
import { ListUserLinksResponse } from "./types/ListUserLinks/ListUserLinksResponse";
export * from "./types/ListUserLinks/ListUserLinks";

const endpoints = {
    global: "https://link.fromsmash.co",
};

config.setHosts("link", endpoints);

export class Link extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "link", ...params, type: "global", userAgent: "@smash-sdk/link@0.0.5" });
    }

    deleteLink(params: DeleteLinkInput): Promise<DeleteLinkOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/link/:linkId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        linkId: params["linkId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteLinkResponse>(request);
                const parsedResponse = this.parseResponse<DeleteLinkResponse, DeleteLinkOutput>(response, this.errors.DeleteLinkError);
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

    getLink(params: GetLinkInput): Promise<GetLinkOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/link/:linkId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        linkId: params["linkId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetLinkResponse>(request);
                const parsedResponse = this.parseResponse<GetLinkResponse, GetLinkOutput>(response, this.errors.GetLinkError);
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

    getTarget(params: GetTargetInput): Promise<GetTargetOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/target/:targetId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        targetId: params["targetId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTargetResponse>(request);
                const parsedResponse = this.parseResponse<GetTargetResponse, GetTargetOutput>(response, this.errors.GetTargetError);
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

    getTeamLink(params: GetTeamLinkInput): Promise<GetTeamLinkOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/link/:linkId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        linkId: params["linkId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamLinkResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamLinkResponse, GetTeamLinkOutput>(response, this.errors.GetTeamLinkError);
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

    getUserLink(params: GetUserLinkInput): Promise<GetUserLinkOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/link/:linkId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        linkId: params["linkId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserLinkResponse>(request);
                const parsedResponse = this.parseResponse<GetUserLinkResponse, GetUserLinkOutput>(response, this.errors.GetUserLinkError);
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

    listLinks(): Promise<ListLinksOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/links",
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
                const response = await this.handle<ListLinksResponse>(request);
                const parsedResponse = this.parseResponse<ListLinksResponse, ListLinksOutput>(response, this.errors.ListLinksError);
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

    listTeamLinks(params: ListTeamLinksInput): Promise<ListTeamLinksOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/links",
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
                const response = await this.handle<ListTeamLinksResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamLinksResponse, ListTeamLinksOutput>(response, this.errors.ListTeamLinksError);
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

    listUserLinks(params: ListUserLinksInput): Promise<ListUserLinksOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/links",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserLinksResponse>(request);
                const parsedResponse = this.parseResponse<ListUserLinksResponse, ListUserLinksOutput>(response, this.errors.ListUserLinksError);
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
