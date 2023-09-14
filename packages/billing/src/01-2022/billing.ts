import { Client } from "@smash-sdk/core";
import { HttpRequest, HttpRequestHostParameters, SDKError, ClientParameters, config } from "@smash-sdk/core";
import { errors } from "./errors";
export * from "./errors";

import { CreateStripeSetupIntentInput, CreateStripeSetupIntentOutput } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntent";
import { CreateStripeSetupIntentResponse } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentResponse";
export * from "./types/CreateStripeSetupIntent/CreateStripeSetupIntent";
import { CreateSubscriptionInput, CreateSubscriptionOutput } from "./types/CreateSubscription/CreateSubscription";
import { CreateSubscriptionResponse } from "./types/CreateSubscription/CreateSubscriptionResponse";
export * from "./types/CreateSubscription/CreateSubscription";
import { ExecutePaypalPaymentInput, ExecutePaypalPaymentOutput } from "./types/ExecutePaypalPayment/ExecutePaypalPayment";
import { ExecutePaypalPaymentResponse } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentResponse";
export * from "./types/ExecutePaypalPayment/ExecutePaypalPayment";
import { ExecuteStripePaymentInput, ExecuteStripePaymentOutput } from "./types/ExecuteStripePayment/ExecuteStripePayment";
import { ExecuteStripePaymentResponse } from "./types/ExecuteStripePayment/ExecuteStripePaymentResponse";
export * from "./types/ExecuteStripePayment/ExecuteStripePayment";
import { GetGroupInput, GetGroupOutput } from "./types/GetGroup/GetGroup";
import { GetGroupResponse } from "./types/GetGroup/GetGroupResponse";
export * from "./types/GetGroup/GetGroup";
import { GetInformationsInput, GetInformationsOutput } from "./types/GetInformations/GetInformations";
import { GetInformationsResponse } from "./types/GetInformations/GetInformationsResponse";
export * from "./types/GetInformations/GetInformations";
import { GetInvoiceInput, GetInvoiceOutput } from "./types/GetInvoice/GetInvoice";
import { GetInvoiceResponse } from "./types/GetInvoice/GetInvoiceResponse";
export * from "./types/GetInvoice/GetInvoice";
import { GetPlanInput, GetPlanOutput } from "./types/GetPlan/GetPlan";
import { GetPlanResponse } from "./types/GetPlan/GetPlanResponse";
export * from "./types/GetPlan/GetPlan";
import { GetPlanGroupInput, GetPlanGroupOutput } from "./types/GetPlanGroup/GetPlanGroup";
import { GetPlanGroupResponse } from "./types/GetPlanGroup/GetPlanGroupResponse";
export * from "./types/GetPlanGroup/GetPlanGroup";
import { GetStripePaymentMethodInput, GetStripePaymentMethodOutput } from "./types/GetStripePaymentMethod/GetStripePaymentMethod";
import { GetStripePaymentMethodResponse } from "./types/GetStripePaymentMethod/GetStripePaymentMethodResponse";
export * from "./types/GetStripePaymentMethod/GetStripePaymentMethod";
import { GetSubscriptionInput, GetSubscriptionOutput } from "./types/GetSubscription/GetSubscription";
import { GetSubscriptionResponse } from "./types/GetSubscription/GetSubscriptionResponse";
export * from "./types/GetSubscription/GetSubscription";
import { InitiatePaypalPaymentInput, InitiatePaypalPaymentOutput } from "./types/InitiatePaypalPayment/InitiatePaypalPayment";
import { InitiatePaypalPaymentResponse } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentResponse";
export * from "./types/InitiatePaypalPayment/InitiatePaypalPayment";
import { InitiateStripePaymentInput, InitiateStripePaymentOutput } from "./types/InitiateStripePayment/InitiateStripePayment";
import { InitiateStripePaymentResponse } from "./types/InitiateStripePayment/InitiateStripePaymentResponse";
export * from "./types/InitiateStripePayment/InitiateStripePayment";
import { ListGroupPlansInput, ListGroupPlansOutput } from "./types/ListGroupPlans/ListGroupPlans";
import { ListGroupPlansResponse } from "./types/ListGroupPlans/ListGroupPlansResponse";
export * from "./types/ListGroupPlans/ListGroupPlans";
import { ListInvoicesInput, ListInvoicesOutput } from "./types/ListInvoices/ListInvoices";
import { ListInvoicesResponse } from "./types/ListInvoices/ListInvoicesResponse";
export * from "./types/ListInvoices/ListInvoices";
import { ListSubscriptionLimitsInput, ListSubscriptionLimitsOutput } from "./types/ListSubscriptionLimits/ListSubscriptionLimits";
import { ListSubscriptionLimitsResponse } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsResponse";
export * from "./types/ListSubscriptionLimits/ListSubscriptionLimits";
import { UnsubscribeSubscriptionInput, UnsubscribeSubscriptionOutput } from "./types/UnsubscribeSubscription/UnsubscribeSubscription";
import { UnsubscribeSubscriptionResponse } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionResponse";
export * from "./types/UnsubscribeSubscription/UnsubscribeSubscription";
import { UpdateInformationsInput, UpdateInformationsOutput } from "./types/UpdateInformations/UpdateInformations";
import { UpdateInformationsResponse } from "./types/UpdateInformations/UpdateInformationsResponse";
export * from "./types/UpdateInformations/UpdateInformations";

const endpoints = {
    "ca-central-1": "https://billing.ca-central-1.fromsmash.co",
    "eu-central-1": "https://billing.eu-central-1.fromsmash.co",
    "eu-west-1": "https://billing.eu-west-1.fromsmash.co",
    "eu-west-2": "https://billing.eu-west-2.fromsmash.co",
    "eu-west-3": "https://billing.eu-west-3.fromsmash.co",
    "us-east-1": "https://billing.us-east-1.fromsmash.co",
    "us-east-2": "https://billing.us-east-2.fromsmash.co",
    "us-west-1": "https://billing.us-west-1.fromsmash.co",
    "us-west-2": "https://billing.us-west-2.fromsmash.co",
};

config.setHosts("billing", endpoints);

export class Billing extends Client {
    public errors = errors;

    constructor(params: ClientParameters = {}) {
        super({ service: "billing", ...params, type: "regional", userAgent: "@smash-sdk/billing@0.0.4" });
    }

    createStripeSetupIntent(): Promise<CreateStripeSetupIntentOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/stripe/setupIntent",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateStripeSetupIntentResponse>(request);
                const parsedResponse = this.parseResponse<CreateStripeSetupIntentResponse, CreateStripeSetupIntentOutput>(response, this.errors.CreateStripeSetupIntentError);
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

    createSubscription(params: CreateSubscriptionInput = {}): Promise<CreateSubscriptionOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/subscription",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },

                    bodyParameters: {
                        plan: params["plan"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<CreateSubscriptionResponse>(request);
                const parsedResponse = this.parseResponse<CreateSubscriptionResponse, CreateSubscriptionOutput>(response, this.errors.CreateSubscriptionError);
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

    executePaypalPayment(params: ExecutePaypalPaymentInput): Promise<ExecutePaypalPaymentOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/paypal/payment/:token/execute",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        token: params["token"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ExecutePaypalPaymentResponse>(request);
                const parsedResponse = this.parseResponse<ExecutePaypalPaymentResponse, ExecutePaypalPaymentOutput>(response, this.errors.ExecutePaypalPaymentError);
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

    executeStripePayment(params: ExecuteStripePaymentInput): Promise<ExecuteStripePaymentOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/stripe/payment/:paymentIntentId/execute",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        paymentIntentId: params["paymentIntentId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ExecuteStripePaymentResponse>(request);
                const parsedResponse = this.parseResponse<ExecuteStripePaymentResponse, ExecuteStripePaymentOutput>(response, this.errors.ExecuteStripePaymentError);
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

    getGroup(params: GetGroupInput): Promise<GetGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetGroupResponse>(request);
                const parsedResponse = this.parseResponse<GetGroupResponse, GetGroupOutput>(response, this.errors.GetGroupError);
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

    getInformations(): Promise<GetInformationsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/informations",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetInformationsResponse>(request);
                const parsedResponse = this.parseResponse<GetInformationsResponse, GetInformationsOutput>(response, this.errors.GetInformationsError);
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

    getInvoice(params: GetInvoiceInput): Promise<GetInvoiceOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/invoice/:invoiceId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        invoiceId: params["invoiceId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetInvoiceResponse>(request);
                const parsedResponse = this.parseResponse<GetInvoiceResponse, GetInvoiceOutput>(response, this.errors.GetInvoiceError);
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

    getPlan(params: GetPlanInput): Promise<GetPlanOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/plan/:planId",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        planId: params["planId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetPlanResponse>(request);
                const parsedResponse = this.parseResponse<GetPlanResponse, GetPlanOutput>(response, this.errors.GetPlanError);
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

    getPlanGroup(params: GetPlanGroupInput): Promise<GetPlanGroupOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/plan/:planId/group",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        planId: params["planId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetPlanGroupResponse>(request);
                const parsedResponse = this.parseResponse<GetPlanGroupResponse, GetPlanGroupOutput>(response, this.errors.GetPlanGroupError);
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

    getStripePaymentMethod(): Promise<GetStripePaymentMethodOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/stripe/paymentMethod",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetStripePaymentMethodResponse>(request);
                const parsedResponse = this.parseResponse<GetStripePaymentMethodResponse, GetStripePaymentMethodOutput>(response, this.errors.GetStripePaymentMethodError);
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

    getSubscription(): Promise<GetSubscriptionOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/subscription",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<GetSubscriptionResponse>(request);
                const parsedResponse = this.parseResponse<GetSubscriptionResponse, GetSubscriptionOutput>(response, this.errors.GetSubscriptionError);
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

    initiatePaypalPayment(): Promise<InitiatePaypalPaymentOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/paypal/payment/initiate",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<InitiatePaypalPaymentResponse>(request);
                const parsedResponse = this.parseResponse<InitiatePaypalPaymentResponse, InitiatePaypalPaymentOutput>(response, this.errors.InitiatePaypalPaymentError);
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

    initiateStripePayment(): Promise<InitiateStripePaymentOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "POST",
                    path: "/stripe/payment/initiate",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<InitiateStripePaymentResponse>(request);
                const parsedResponse = this.parseResponse<InitiateStripePaymentResponse, InitiateStripePaymentOutput>(response, this.errors.InitiateStripePaymentError);
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

    listGroupPlans(params: ListGroupPlansInput): Promise<ListGroupPlansOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/group/:groupId/plans",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {
                        groupId: params["groupId"],
                    },
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListGroupPlansResponse>(request);
                const parsedResponse = this.parseResponse<ListGroupPlansResponse, ListGroupPlansOutput>(response, this.errors.ListGroupPlansError);
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

    listInvoices(): Promise<ListInvoicesOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/invoices",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListInvoicesResponse>(request);
                const parsedResponse = this.parseResponse<ListInvoicesResponse, ListInvoicesOutput>(response, this.errors.ListInvoicesError);
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

    listSubscriptionLimits(): Promise<ListSubscriptionLimitsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "GET",
                    path: "/limits",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<ListSubscriptionLimitsResponse>(request);
                const parsedResponse = this.parseResponse<ListSubscriptionLimitsResponse, ListSubscriptionLimitsOutput>(response, this.errors.ListSubscriptionLimitsError);
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

    unsubscribeSubscription(params: UnsubscribeSubscriptionInput = {}): Promise<UnsubscribeSubscriptionOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/subscription/unsubscribe",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },

                    bodyParameters: {
                        reasonType: params["reasonType"],
                        description: params["description"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UnsubscribeSubscriptionResponse>(request);
                const parsedResponse = this.parseResponse<UnsubscribeSubscriptionResponse, UnsubscribeSubscriptionOutput>(response, this.errors.UnsubscribeSubscriptionError);
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

    updateInformations(params: UpdateInformationsInput): Promise<UpdateInformationsOutput> {
        return new Promise(async (resolve, reject) => {
            try {
                const requestParams: HttpRequestHostParameters = {
                    host: this.host,
                    method: "PUT",
                    path: "/informations",
                    headers: {
                        Authorization: "Bearer " + this.token,
                    },
                    pathParameters: {},
                    queryParameters: {
                        version: "01-2022",
                    },

                    bodyParameters: {
                        city: params["city"],
                        state: params["state"],
                        stateCode: params["stateCode"],
                        country: params["country"],
                        zipCode: params["zipCode"],
                        company: params["company"],
                        address: params["address"],
                        lastName: params["lastName"],
                        firstName: params["firstName"],
                        vatNumber: params["vatNumber"],
                        countryCode: params["countryCode"],
                    },
                    refreshTokenMethod: this.refreshTokenMethod,
                };
                const request = new HttpRequest(requestParams);
                const response = await this.handle<UpdateInformationsResponse>(request);
                const parsedResponse = this.parseResponse<UpdateInformationsResponse, UpdateInformationsOutput>(response, this.errors.UpdateInformationsError);
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
