import { ExtendedTransfer } from "./extendedTransfer";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { ListTeamTransferEventsInput, ListTeamTransferEventsOutput } from "./types/ListTeamTransferEvents/ListTeamTransferEvents";
import { ListTeamTransferEventsResponse } from "./types/ListTeamTransferEvents/ListTeamTransferEventsResponse";
export * from "./types/ListTeamTransferEvents/ListTeamTransferEvents";
import { ListTeamTransferFilesInput, ListTeamTransferFilesOutput } from "./types/ListTeamTransferFiles/ListTeamTransferFiles";
import { ListTeamTransferFilesResponse } from "./types/ListTeamTransferFiles/ListTeamTransferFilesResponse";
export * from "./types/ListTeamTransferFiles/ListTeamTransferFiles";
import { ListTeamTransfersInput, ListTeamTransfersOutput } from "./types/ListTeamTransfers/ListTeamTransfers";
import { ListTeamTransfersResponse } from "./types/ListTeamTransfers/ListTeamTransfersResponse";
export * from "./types/ListTeamTransfers/ListTeamTransfers";
import { ListTeamUserTransfersInput, ListTeamUserTransfersOutput } from "./types/ListTeamUserTransfers/ListTeamUserTransfers";
import { ListTeamUserTransfersResponse } from "./types/ListTeamUserTransfers/ListTeamUserTransfersResponse";
export * from "./types/ListTeamUserTransfers/ListTeamUserTransfers";
import { ListTransferEventsInput, ListTransferEventsOutput } from "./types/ListTransferEvents/ListTransferEvents";
import { ListTransferEventsResponse } from "./types/ListTransferEvents/ListTransferEventsResponse";
export * from "./types/ListTransferEvents/ListTransferEvents";
import { ListTransferFilesInput, ListTransferFilesOutput } from "./types/ListTransferFiles/ListTransferFiles";
import { ListTransferFilesResponse } from "./types/ListTransferFiles/ListTransferFilesResponse";
export * from "./types/ListTransferFiles/ListTransferFiles";
import { ListTransferFilesPreviewInput, ListTransferFilesPreviewOutput } from "./types/ListTransferFilesPreview/ListTransferFilesPreview";
import { ListTransferFilesPreviewResponse } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewResponse";
export * from "./types/ListTransferFilesPreview/ListTransferFilesPreview";
import { ListTransfersInput, ListTransfersOutput } from "./types/ListTransfers/ListTransfers";
import { ListTransfersResponse } from "./types/ListTransfers/ListTransfersResponse";
export * from "./types/ListTransfers/ListTransfers";
import { ListUserTransferEventsInput, ListUserTransferEventsOutput } from "./types/ListUserTransferEvents/ListUserTransferEvents";
import { ListUserTransferEventsResponse } from "./types/ListUserTransferEvents/ListUserTransferEventsResponse";
export * from "./types/ListUserTransferEvents/ListUserTransferEvents";
import { ListUserTransferFilesInput, ListUserTransferFilesOutput } from "./types/ListUserTransferFiles/ListUserTransferFiles";
import { ListUserTransferFilesResponse } from "./types/ListUserTransferFiles/ListUserTransferFilesResponse";
export * from "./types/ListUserTransferFiles/ListUserTransferFiles";
import { ListUserTransfersInput, ListUserTransfersOutput } from "./types/ListUserTransfers/ListUserTransfers";
import { ListUserTransfersResponse } from "./types/ListUserTransfers/ListUserTransfersResponse";
export * from "./types/ListUserTransfers/ListUserTransfers";
import { LockTransferInput, LockTransferOutput } from "./types/LockTransfer/LockTransfer";
import { LockTransferResponse } from "./types/LockTransfer/LockTransferResponse";
export * from "./types/LockTransfer/LockTransfer";
import { UpdateTransferInput, UpdateTransferOutput } from "./types/UpdateTransfer/UpdateTransfer";
import { UpdateTransferResponse } from "./types/UpdateTransfer/UpdateTransferResponse";
export * from "./types/UpdateTransfer/UpdateTransfer";
import { UpdateTransferCustomizationInput, UpdateTransferCustomizationOutput } from "./types/UpdateTransferCustomization/UpdateTransferCustomization";
import { UpdateTransferCustomizationResponse } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationResponse";
export * from "./types/UpdateTransferCustomization/UpdateTransferCustomization";
import { UpdateTransferFileInput, UpdateTransferFileOutput } from "./types/UpdateTransferFile/UpdateTransferFile";
import { UpdateTransferFileResponse } from "./types/UpdateTransferFile/UpdateTransferFileResponse";
export * from "./types/UpdateTransferFile/UpdateTransferFile";
import { UpdateTransferFilePartInput, UpdateTransferFilePartOutput } from "./types/UpdateTransferFilePart/UpdateTransferFilePart";
import { UpdateTransferFilePartResponse } from "./types/UpdateTransferFilePart/UpdateTransferFilePartResponse";
export * from "./types/UpdateTransferFilePart/UpdateTransferFilePart";
import { UpdateTransferFilePartsInput, UpdateTransferFilePartsOutput } from "./types/UpdateTransferFileParts/UpdateTransferFileParts";
import { UpdateTransferFilePartsResponse } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsResponse";
export * from "./types/UpdateTransferFileParts/UpdateTransferFileParts";
import { CreateTeamTransferInput, CreateTeamTransferOutput } from "./types/CreateTeamTransfer/CreateTeamTransfer";
import { CreateTeamTransferResponse } from "./types/CreateTeamTransfer/CreateTeamTransferResponse";
export * from "./types/CreateTeamTransfer/CreateTeamTransfer";
import { CreateTransferInput, CreateTransferOutput } from "./types/CreateTransfer/CreateTransfer";
import { CreateTransferResponse } from "./types/CreateTransfer/CreateTransferResponse";
export * from "./types/CreateTransfer/CreateTransfer";
import { CreateTransferFileInput, CreateTransferFileOutput } from "./types/CreateTransferFile/CreateTransferFile";
import { CreateTransferFileResponse } from "./types/CreateTransferFile/CreateTransferFileResponse";
export * from "./types/CreateTransferFile/CreateTransferFile";
import { CreateTransferFilePartInput, CreateTransferFilePartOutput } from "./types/CreateTransferFilePart/CreateTransferFilePart";
import { CreateTransferFilePartResponse } from "./types/CreateTransferFilePart/CreateTransferFilePartResponse";
export * from "./types/CreateTransferFilePart/CreateTransferFilePart";
import { CreateTransferFilePartsInput, CreateTransferFilePartsOutput } from "./types/CreateTransferFileParts/CreateTransferFileParts";
import { CreateTransferFilePartsResponse } from "./types/CreateTransferFileParts/CreateTransferFilePartsResponse";
export * from "./types/CreateTransferFileParts/CreateTransferFileParts";
import { CreateTransferSignedUrlsInput, CreateTransferSignedUrlsOutput } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrls";
import { CreateTransferSignedUrlsResponse } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsResponse";
export * from "./types/CreateTransferSignedUrls/CreateTransferSignedUrls";
import { DeleteReportInput, DeleteReportOutput } from "./types/DeleteReport/DeleteReport";
import { DeleteReportResponse } from "./types/DeleteReport/DeleteReportResponse";
export * from "./types/DeleteReport/DeleteReport";
import { DeleteTeamTransferInput, DeleteTeamTransferOutput } from "./types/DeleteTeamTransfer/DeleteTeamTransfer";
import { DeleteTeamTransferResponse } from "./types/DeleteTeamTransfer/DeleteTeamTransferResponse";
export * from "./types/DeleteTeamTransfer/DeleteTeamTransfer";
import { DeleteTransferInput, DeleteTransferOutput } from "./types/DeleteTransfer/DeleteTransfer";
import { DeleteTransferResponse } from "./types/DeleteTransfer/DeleteTransferResponse";
export * from "./types/DeleteTransfer/DeleteTransfer";
import { DeleteTransferFileInput, DeleteTransferFileOutput } from "./types/DeleteTransferFile/DeleteTransferFile";
import { DeleteTransferFileResponse } from "./types/DeleteTransferFile/DeleteTransferFileResponse";
export * from "./types/DeleteTransferFile/DeleteTransferFile";
import { DeleteUserTransferInput, DeleteUserTransferOutput } from "./types/DeleteUserTransfer/DeleteUserTransfer";
import { DeleteUserTransferResponse } from "./types/DeleteUserTransfer/DeleteUserTransferResponse";
export * from "./types/DeleteUserTransfer/DeleteUserTransfer";
import { GetMetricStatisticInput, GetMetricStatisticOutput } from "./types/GetMetricStatistic/GetMetricStatistic";
import { GetMetricStatisticResponse } from "./types/GetMetricStatistic/GetMetricStatisticResponse";
export * from "./types/GetMetricStatistic/GetMetricStatistic";
import { GetReportInput, GetReportOutput } from "./types/GetReport/GetReport";
import { GetReportResponse } from "./types/GetReport/GetReportResponse";
export * from "./types/GetReport/GetReport";
import { GetTeamMetricStatisticInput, GetTeamMetricStatisticOutput } from "./types/GetTeamMetricStatistic/GetTeamMetricStatistic";
import { GetTeamMetricStatisticResponse } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticResponse";
export * from "./types/GetTeamMetricStatistic/GetTeamMetricStatistic";
import { GetTeamTransferInput, GetTeamTransferOutput } from "./types/GetTeamTransfer/GetTeamTransfer";
import { GetTeamTransferResponse } from "./types/GetTeamTransfer/GetTeamTransferResponse";
export * from "./types/GetTeamTransfer/GetTeamTransfer";
import { GetTeamTransferFileInput, GetTeamTransferFileOutput } from "./types/GetTeamTransferFile/GetTeamTransferFile";
import { GetTeamTransferFileResponse } from "./types/GetTeamTransferFile/GetTeamTransferFileResponse";
export * from "./types/GetTeamTransferFile/GetTeamTransferFile";
import { GetTeamTransferQueueInput, GetTeamTransferQueueOutput } from "./types/GetTeamTransferQueue/GetTeamTransferQueue";
import { GetTeamTransferQueueResponse } from "./types/GetTeamTransferQueue/GetTeamTransferQueueResponse";
export * from "./types/GetTeamTransferQueue/GetTeamTransferQueue";
import { GetTeamUsageInput, GetTeamUsageOutput } from "./types/GetTeamUsage/GetTeamUsage";
import { GetTeamUsageResponse } from "./types/GetTeamUsage/GetTeamUsageResponse";
export * from "./types/GetTeamUsage/GetTeamUsage";
import { GetTeamUserMetricStatisticInput, GetTeamUserMetricStatisticOutput } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatistic";
import { GetTeamUserMetricStatisticResponse } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticResponse";
export * from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatistic";
import { GetTeamUserUsageInput, GetTeamUserUsageOutput } from "./types/GetTeamUserUsage/GetTeamUserUsage";
import { GetTeamUserUsageResponse } from "./types/GetTeamUserUsage/GetTeamUserUsageResponse";
export * from "./types/GetTeamUserUsage/GetTeamUserUsage";
import { GetTransferInput, GetTransferOutput } from "./types/GetTransfer/GetTransfer";
import { GetTransferResponse } from "./types/GetTransfer/GetTransferResponse";
export * from "./types/GetTransfer/GetTransfer";
import { GetTransferFileInput, GetTransferFileOutput } from "./types/GetTransferFile/GetTransferFile";
import { GetTransferFileResponse } from "./types/GetTransferFile/GetTransferFileResponse";
export * from "./types/GetTransferFile/GetTransferFile";
import { GetTransferFilePreviewInput, GetTransferFilePreviewOutput } from "./types/GetTransferFilePreview/GetTransferFilePreview";
import { GetTransferFilePreviewResponse } from "./types/GetTransferFilePreview/GetTransferFilePreviewResponse";
export * from "./types/GetTransferFilePreview/GetTransferFilePreview";
import { GetTransferPreviewInput, GetTransferPreviewOutput } from "./types/GetTransferPreview/GetTransferPreview";
import { GetTransferPreviewResponse } from "./types/GetTransferPreview/GetTransferPreviewResponse";
export * from "./types/GetTransferPreview/GetTransferPreview";
import { GetTransferQueueInput, GetTransferQueueOutput } from "./types/GetTransferQueue/GetTransferQueue";
import { GetTransferQueueResponse } from "./types/GetTransferQueue/GetTransferQueueResponse";
export * from "./types/GetTransferQueue/GetTransferQueue";
import { GetUsageInput, GetUsageOutput } from "./types/GetUsage/GetUsage";
import { GetUsageResponse } from "./types/GetUsage/GetUsageResponse";
export * from "./types/GetUsage/GetUsage";
import { GetUserMetricStatisticInput, GetUserMetricStatisticOutput } from "./types/GetUserMetricStatistic/GetUserMetricStatistic";
import { GetUserMetricStatisticResponse } from "./types/GetUserMetricStatistic/GetUserMetricStatisticResponse";
export * from "./types/GetUserMetricStatistic/GetUserMetricStatistic";
import { GetUserTransferInput, GetUserTransferOutput } from "./types/GetUserTransfer/GetUserTransfer";
import { GetUserTransferResponse } from "./types/GetUserTransfer/GetUserTransferResponse";
export * from "./types/GetUserTransfer/GetUserTransfer";
import { GetUserTransferFileInput, GetUserTransferFileOutput } from "./types/GetUserTransferFile/GetUserTransferFile";
import { GetUserTransferFileResponse } from "./types/GetUserTransferFile/GetUserTransferFileResponse";
export * from "./types/GetUserTransferFile/GetUserTransferFile";
import { GetUserUsageInput, GetUserUsageOutput } from "./types/GetUserUsage/GetUserUsage";
import { GetUserUsageResponse } from "./types/GetUserUsage/GetUserUsageResponse";
export * from "./types/GetUserUsage/GetUserUsage";

export * from "./types/Download/Download";
export * from "./types/UploadTransferFilePart/UploadTransferFilePart";

const endpoints = {
    "ca-central-1": "https://transfer.ca-central-1.fromsmash.co",
    "eu-central-1": "https://transfer.eu-central-1.fromsmash.co",
    "eu-west-1": "https://transfer.eu-west-1.fromsmash.co",
    "eu-west-2": "https://transfer.eu-west-2.fromsmash.co",
    "eu-west-3": "https://transfer.eu-west-3.fromsmash.co",
    "us-east-1": "https://transfer.us-east-1.fromsmash.co",
    "us-east-2": "https://transfer.us-east-2.fromsmash.co",
    "us-west-1": "https://transfer.us-west-1.fromsmash.co",
    "us-west-2": "https://transfer.us-west-2.fromsmash.co",
};

config.setHosts("transfer", endpoints);

export class Transfer extends ExtendedTransfer {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "transfer", ...params, type: "regional", userAgent: "@smash-sdk/transfer@0.0.13" });
    }

    listTeamTransferEvents(params: ListTeamTransferEventsInput): Promise<ListTeamTransferEventsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfer/:transferId/events",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamTransferEventsResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamTransferEventsResponse, ListTeamTransferEventsOutput>(response, this.errors.ListTeamTransferEventsError);
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

    listTeamTransferFiles(params: ListTeamTransferFilesInput): Promise<ListTeamTransferFilesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfer/:transferId/files",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamTransferFilesResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamTransferFilesResponse, ListTeamTransferFilesOutput>(response, this.errors.ListTeamTransferFilesError);
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

    listTeamTransfers(params: ListTeamTransfersInput): Promise<ListTeamTransfersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfers",
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
                const response = await this.handle<ListTeamTransfersResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamTransfersResponse, ListTeamTransfersOutput>(response, this.errors.ListTeamTransfersError);
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

    listTeamUserTransfers(params: ListTeamUserTransfersInput): Promise<ListTeamUserTransfersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId/transfers",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTeamUserTransfersResponse>(request);
                const parsedResponse = this.parseResponse<ListTeamUserTransfersResponse, ListTeamUserTransfersOutput>(response, this.errors.ListTeamUserTransfersError);
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

    listTransferEvents(params: ListTransferEventsInput): Promise<ListTransferEventsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/events",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTransferEventsResponse>(request);
                const parsedResponse = this.parseResponse<ListTransferEventsResponse, ListTransferEventsOutput>(response, this.errors.ListTransferEventsError);
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

    listTransferFiles(params: ListTransferFilesInput): Promise<ListTransferFilesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/files",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTransferFilesResponse>(request);
                const parsedResponse = this.parseResponse<ListTransferFilesResponse, ListTransferFilesOutput>(response, this.errors.ListTransferFilesError);
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

    listTransferFilesPreview(params: ListTransferFilesPreviewInput): Promise<ListTransferFilesPreviewOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/files/preview",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        limit: params["limit"],
                        start: params["start"],
                        sort: params["sort"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListTransferFilesPreviewResponse>(request);
                const parsedResponse = this.parseResponse<ListTransferFilesPreviewResponse, ListTransferFilesPreviewOutput>(response, this.errors.ListTransferFilesPreviewError);
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

    listTransfers(): Promise<ListTransfersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfers",
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
                const response = await this.handle<ListTransfersResponse>(request);
                const parsedResponse = this.parseResponse<ListTransfersResponse, ListTransfersOutput>(response, this.errors.ListTransfersError);
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

    listUserTransferEvents(params: ListUserTransferEventsInput): Promise<ListUserTransferEventsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/transfer/:transferId/events",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserTransferEventsResponse>(request);
                const parsedResponse = this.parseResponse<ListUserTransferEventsResponse, ListUserTransferEventsOutput>(response, this.errors.ListUserTransferEventsError);
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

    listUserTransferFiles(params: ListUserTransferFilesInput): Promise<ListUserTransferFilesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/transfer/:transferId/files",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListUserTransferFilesResponse>(request);
                const parsedResponse = this.parseResponse<ListUserTransferFilesResponse, ListUserTransferFilesOutput>(response, this.errors.ListUserTransferFilesError);
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

    listUserTransfers(params: ListUserTransfersInput): Promise<ListUserTransfersOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/transfers",
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
                const response = await this.handle<ListUserTransfersResponse>(request);
                const parsedResponse = this.parseResponse<ListUserTransfersResponse, ListUserTransfersOutput>(response, this.errors.ListUserTransfersError);
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

    lockTransfer(params: LockTransferInput): Promise<LockTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/lock",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<LockTransferResponse>(request);
                const parsedResponse = this.parseResponse<LockTransferResponse, LockTransferOutput>(response, this.errors.LockTransferError);
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

    updateTransfer(params: UpdateTransferInput): Promise<UpdateTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        size: params["size"],
                        filesNumber: params["filesNumber"],
                        language: params["language"],
                        availabilityDuration: params["availabilityDuration"],
                        title: params["title"],
                        delivery: params["delivery"],
                        customization: params["customization"],
                        promotion: params["promotion"],
                        preview: params["preview"],
                        password: params["password"],
                        notificationType: params["notificationType"],
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTransferResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTransferResponse, UpdateTransferOutput>(response, this.errors.UpdateTransferError);
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

    updateTransferCustomization(params: UpdateTransferCustomizationInput): Promise<UpdateTransferCustomizationOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/customization",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        customization: params["customization"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTransferCustomizationResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTransferCustomizationResponse, UpdateTransferCustomizationOutput>(response, this.errors.UpdateTransferCustomizationError);
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

    updateTransferFile(params: UpdateTransferFileInput): Promise<UpdateTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/file/:fileId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        parts: params["parts"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTransferFileResponse, UpdateTransferFileOutput>(response, this.errors.UpdateTransferFileError);
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

    updateTransferFilePart(params: UpdateTransferFilePartInput): Promise<UpdateTransferFilePartOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/file/:fileId/part/:partId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                        partId: params["partId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        etag: params["etag"],
                        crc32: params["crc32"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTransferFilePartResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTransferFilePartResponse, UpdateTransferFilePartOutput>(response, this.errors.UpdateTransferFilePartError);
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

    updateTransferFileParts(params: UpdateTransferFilePartsInput): Promise<UpdateTransferFilePartsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/file/:fileId/parts",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        parts: params["parts"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateTransferFilePartsResponse>(request);
                const parsedResponse = this.parseResponse<UpdateTransferFilePartsResponse, UpdateTransferFilePartsOutput>(response, this.errors.UpdateTransferFilePartsError);
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

    createTeamTransfer(params: CreateTeamTransferInput): Promise<CreateTeamTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/team/:teamId/transfer",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        size: params["size"],
                        filesNumber: params["filesNumber"],
                        domain: params["domain"],
                        customUrl: params["customUrl"],
                        language: params["language"],
                        availabilityDuration: params["availabilityDuration"],
                        title: params["title"],
                        delivery: params["delivery"],
                        customization: params["customization"],
                        promotion: params["promotion"],
                        preview: params["preview"],
                        accessTracking: params["accessTracking"],
                        password: params["password"],
                        notificationType: params["notificationType"],
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTeamTransferResponse>(request);
                const parsedResponse = this.parseResponse<CreateTeamTransferResponse, CreateTeamTransferOutput>(response, this.errors.CreateTeamTransferError);
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

    createTransfer(params: CreateTransferInput): Promise<CreateTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/transfer",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        size: params["size"],
                        filesNumber: params["filesNumber"],
                        domain: params["domain"],
                        customUrl: params["customUrl"],
                        language: params["language"],
                        availabilityDuration: params["availabilityDuration"],
                        title: params["title"],
                        delivery: params["delivery"],
                        customization: params["customization"],
                        promotion: params["promotion"],
                        preview: params["preview"],
                        accessTracking: params["accessTracking"],
                        password: params["password"],
                        notificationType: params["notificationType"],
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTransferResponse>(request);
                const parsedResponse = this.parseResponse<CreateTransferResponse, CreateTransferOutput>(response, this.errors.CreateTransferError);
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

    createTransferFile(params: CreateTransferFileInput): Promise<CreateTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/transfer/:transferId/file",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        name: params["name"],
                        size: params["size"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<CreateTransferFileResponse, CreateTransferFileOutput>(response, this.errors.CreateTransferFileError);
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

    createTransferFilePart(params: CreateTransferFilePartInput): Promise<CreateTransferFilePartOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/transfer/:transferId/file/:fileId/part",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        id: params["id"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTransferFilePartResponse>(request);
                const parsedResponse = this.parseResponse<CreateTransferFilePartResponse, CreateTransferFilePartOutput>(response, this.errors.CreateTransferFilePartError);
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

    createTransferFileParts(params: CreateTransferFilePartsInput): Promise<CreateTransferFilePartsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/transfer/:transferId/file/:fileId/parts",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },

                    bodyParameters: {
                        parts: params["parts"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTransferFilePartsResponse>(request);
                const parsedResponse = this.parseResponse<CreateTransferFilePartsResponse, CreateTransferFilePartsOutput>(response, this.errors.CreateTransferFilePartsError);
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

    createTransferSignedUrls(params: CreateTransferSignedUrlsInput): Promise<CreateTransferSignedUrlsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/transfer/:transferId/urls",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        e: params["e"],
                        version: "10-2019",
                    },

                    bodyParameters: {
                        files: params["files"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateTransferSignedUrlsResponse>(request);
                const parsedResponse = this.parseResponse<CreateTransferSignedUrlsResponse, CreateTransferSignedUrlsOutput>(response, this.errors.CreateTransferSignedUrlsError);
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

    deleteReport(params: DeleteReportInput): Promise<DeleteReportOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/report/:reportId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        reportId: params["reportId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteReportResponse>(request);
                const parsedResponse = this.parseResponse<DeleteReportResponse, DeleteReportOutput>(response, this.errors.DeleteReportError);
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

    deleteTeamTransfer(params: DeleteTeamTransferInput): Promise<DeleteTeamTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/team/:teamId/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteTeamTransferResponse>(request);
                const parsedResponse = this.parseResponse<DeleteTeamTransferResponse, DeleteTeamTransferOutput>(response, this.errors.DeleteTeamTransferError);
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

    deleteTransfer(params: DeleteTransferInput): Promise<DeleteTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteTransferResponse>(request);
                const parsedResponse = this.parseResponse<DeleteTransferResponse, DeleteTransferOutput>(response, this.errors.DeleteTransferError);
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

    deleteTransferFile(params: DeleteTransferFileInput): Promise<DeleteTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/transfer/:transferId/file/:fileId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<DeleteTransferFileResponse, DeleteTransferFileOutput>(response, this.errors.DeleteTransferFileError);
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

    deleteUserTransfer(params: DeleteUserTransferInput): Promise<DeleteUserTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "DELETE",
                    path: "/user/:userId/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<DeleteUserTransferResponse>(request);
                const parsedResponse = this.parseResponse<DeleteUserTransferResponse, DeleteUserTransferOutput>(response, this.errors.DeleteUserTransferError);
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

    getMetricStatistic(params: GetMetricStatisticInput): Promise<GetMetricStatisticOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/metric/:metricName/statistic/:statisticName",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        metricName: params["metricName"],
                        statisticName: params["statisticName"],
                    },
                    queryParameters: {
                        startDate: params["startDate"],
                        endDate: params["endDate"],
                        unit: params["unit"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetMetricStatisticResponse>(request);
                const parsedResponse = this.parseResponse<GetMetricStatisticResponse, GetMetricStatisticOutput>(response, this.errors.GetMetricStatisticError);
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

    getReport(params: GetReportInput): Promise<GetReportOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/report/:reportId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        reportId: params["reportId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetReportResponse>(request);
                const parsedResponse = this.parseResponse<GetReportResponse, GetReportOutput>(response, this.errors.GetReportError);
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

    getTeamMetricStatistic(params: GetTeamMetricStatisticInput): Promise<GetTeamMetricStatisticOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/metric/:metricName/statistic/:statisticName",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        metricName: params["metricName"],
                        statisticName: params["statisticName"],
                    },
                    queryParameters: {
                        startDate: params["startDate"],
                        endDate: params["endDate"],
                        unit: params["unit"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamMetricStatisticResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamMetricStatisticResponse, GetTeamMetricStatisticOutput>(response, this.errors.GetTeamMetricStatisticError);
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

    getTeamTransfer(params: GetTeamTransferInput): Promise<GetTeamTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamTransferResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamTransferResponse, GetTeamTransferOutput>(response, this.errors.GetTeamTransferError);
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

    getTeamTransferFile(params: GetTeamTransferFileInput): Promise<GetTeamTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfer/:transferId/file/:fileId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamTransferFileResponse, GetTeamTransferFileOutput>(response, this.errors.GetTeamTransferFileError);
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

    getTeamTransferQueue(params: GetTeamTransferQueueInput): Promise<GetTeamTransferQueueOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/transfer/queue",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                    },
                    queryParameters: {
                        size: params["size"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamTransferQueueResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamTransferQueueResponse, GetTeamTransferQueueOutput>(response, this.errors.GetTeamTransferQueueError);
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

    getTeamUsage(params: GetTeamUsageInput): Promise<GetTeamUsageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/usage",
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
                const response = await this.handle<GetTeamUsageResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamUsageResponse, GetTeamUsageOutput>(response, this.errors.GetTeamUsageError);
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

    getTeamUserMetricStatistic(params: GetTeamUserMetricStatisticInput): Promise<GetTeamUserMetricStatisticOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId/metric/:metricName/statistic/:statisticName",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                        metricName: params["metricName"],
                        statisticName: params["statisticName"],
                    },
                    queryParameters: {
                        startDate: params["startDate"],
                        endDate: params["endDate"],
                        unit: params["unit"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamUserMetricStatisticResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamUserMetricStatisticResponse, GetTeamUserMetricStatisticOutput>(response, this.errors.GetTeamUserMetricStatisticError);
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

    getTeamUserUsage(params: GetTeamUserUsageInput): Promise<GetTeamUserUsageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/team/:teamId/user/:userId/usage",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        teamId: params["teamId"],
                        userId: params["userId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTeamUserUsageResponse>(request);
                const parsedResponse = this.parseResponse<GetTeamUserUsageResponse, GetTeamUserUsageOutput>(response, this.errors.GetTeamUserUsageError);
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

    getTransfer(params: GetTransferInput): Promise<GetTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTransferResponse>(request);
                const parsedResponse = this.parseResponse<GetTransferResponse, GetTransferOutput>(response, this.errors.GetTransferError);
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

    getTransferFile(params: GetTransferFileInput): Promise<GetTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/file/:fileId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<GetTransferFileResponse, GetTransferFileOutput>(response, this.errors.GetTransferFileError);
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

    getTransferFilePreview(params: GetTransferFilePreviewInput): Promise<GetTransferFilePreviewOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/file/:fileId/preview",
                    headers: {
                        Authorization: "Bearer " + this.token,

                        "smash-authorization": params["smash-authorization"],
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTransferFilePreviewResponse>(request);
                const parsedResponse = this.parseResponse<GetTransferFilePreviewResponse, GetTransferFilePreviewOutput>(response, this.errors.GetTransferFilePreviewError);
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

    getTransferPreview(params: GetTransferPreviewInput): Promise<GetTransferPreviewOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/:transferId/preview",
                    headers: {
                        Authorization: "Bearer " + this.token,

                        "smash-authorization": params["smash-authorization"],
                    },
                    pathParameters: {
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        e: params["e"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTransferPreviewResponse>(request);
                const parsedResponse = this.parseResponse<GetTransferPreviewResponse, GetTransferPreviewOutput>(response, this.errors.GetTransferPreviewError);
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

    getTransferQueue(params: GetTransferQueueInput): Promise<GetTransferQueueOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/transfer/queue",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        size: params["size"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetTransferQueueResponse>(request);
                const parsedResponse = this.parseResponse<GetTransferQueueResponse, GetTransferQueueOutput>(response, this.errors.GetTransferQueueError);
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

    getUsage(): Promise<GetUsageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/usage",
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
                const response = await this.handle<GetUsageResponse>(request);
                const parsedResponse = this.parseResponse<GetUsageResponse, GetUsageOutput>(response, this.errors.GetUsageError);
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

    getUserMetricStatistic(params: GetUserMetricStatisticInput): Promise<GetUserMetricStatisticOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/metric/:metricName/statistic/:statisticName",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        metricName: params["metricName"],
                        statisticName: params["statisticName"],
                    },
                    queryParameters: {
                        startDate: params["startDate"],
                        endDate: params["endDate"],
                        unit: params["unit"],
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserMetricStatisticResponse>(request);
                const parsedResponse = this.parseResponse<GetUserMetricStatisticResponse, GetUserMetricStatisticOutput>(response, this.errors.GetUserMetricStatisticError);
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

    getUserTransfer(params: GetUserTransferInput): Promise<GetUserTransferOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/transfer/:transferId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        transferId: params["transferId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserTransferResponse>(request);
                const parsedResponse = this.parseResponse<GetUserTransferResponse, GetUserTransferOutput>(response, this.errors.GetUserTransferError);
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

    getUserTransferFile(params: GetUserTransferFileInput): Promise<GetUserTransferFileOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/transfer/:transferId/file/:fileId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        userId: params["userId"],
                        transferId: params["transferId"],
                        fileId: params["fileId"],
                    },
                    queryParameters: {
                        version: "10-2019",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetUserTransferFileResponse>(request);
                const parsedResponse = this.parseResponse<GetUserTransferFileResponse, GetUserTransferFileOutput>(response, this.errors.GetUserTransferFileError);
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

    getUserUsage(params: GetUserUsageInput): Promise<GetUserUsageOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/user/:userId/usage",
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
                const response = await this.handle<GetUserUsageResponse>(request);
                const parsedResponse = this.parseResponse<GetUserUsageResponse, GetUserUsageOutput>(response, this.errors.GetUserUsageError);
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
