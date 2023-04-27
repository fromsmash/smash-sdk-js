import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { UnauthorizedError as CreateStripeSetupIntentUnauthorizedError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { InvalidPaymentProviderError as CreateStripeSetupIntentInvalidPaymentProviderError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { NotFoundError as CreateStripeSetupIntentNotFoundError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { InternalServerError as CreateStripeSetupIntentInternalServerError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { BadGatewayError as CreateStripeSetupIntentBadGatewayError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { GatewayTimeoutError as CreateStripeSetupIntentGatewayTimeoutError } from "./types/CreateStripeSetupIntent/CreateStripeSetupIntentError";
import { InvalidParameterError as CreateSubscriptionInvalidParameterError } from "./types/CreateSubscription/CreateSubscriptionError";
import { UnauthorizedError as CreateSubscriptionUnauthorizedError } from "./types/CreateSubscription/CreateSubscriptionError";
import { InvalidPaymentInformationsError as CreateSubscriptionInvalidPaymentInformationsError } from "./types/CreateSubscription/CreateSubscriptionError";
import { InvalidSubscriptionPlanError as CreateSubscriptionInvalidSubscriptionPlanError } from "./types/CreateSubscription/CreateSubscriptionError";
import { InvalidTrialPlanError as CreateSubscriptionInvalidTrialPlanError } from "./types/CreateSubscription/CreateSubscriptionError";
import { NotFoundError as CreateSubscriptionNotFoundError } from "./types/CreateSubscription/CreateSubscriptionError";
import { InternalServerError as CreateSubscriptionInternalServerError } from "./types/CreateSubscription/CreateSubscriptionError";
import { BadGatewayError as CreateSubscriptionBadGatewayError } from "./types/CreateSubscription/CreateSubscriptionError";
import { GatewayTimeoutError as CreateSubscriptionGatewayTimeoutError } from "./types/CreateSubscription/CreateSubscriptionError";
import { InvalidParameterError as ExecutePaypalPaymentInvalidParameterError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { UnauthorizedError as ExecutePaypalPaymentUnauthorizedError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { ConflictError as ExecutePaypalPaymentConflictError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { InternalServerError as ExecutePaypalPaymentInternalServerError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { BadGatewayError as ExecutePaypalPaymentBadGatewayError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { GatewayTimeoutError as ExecutePaypalPaymentGatewayTimeoutError } from "./types/ExecutePaypalPayment/ExecutePaypalPaymentError";
import { InvalidParameterError as ExecuteStripePaymentInvalidParameterError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { UnauthorizedError as ExecuteStripePaymentUnauthorizedError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { InvalidPaymentProviderError as ExecuteStripePaymentInvalidPaymentProviderError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { NotFoundError as ExecuteStripePaymentNotFoundError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { ConflictError as ExecuteStripePaymentConflictError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { InternalServerError as ExecuteStripePaymentInternalServerError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { BadGatewayError as ExecuteStripePaymentBadGatewayError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { GatewayTimeoutError as ExecuteStripePaymentGatewayTimeoutError } from "./types/ExecuteStripePayment/ExecuteStripePaymentError";
import { InvalidParameterError as GetGroupInvalidParameterError } from "./types/GetGroup/GetGroupError";
import { UnauthorizedError as GetGroupUnauthorizedError } from "./types/GetGroup/GetGroupError";
import { NotFoundError as GetGroupNotFoundError } from "./types/GetGroup/GetGroupError";
import { InternalServerError as GetGroupInternalServerError } from "./types/GetGroup/GetGroupError";
import { BadGatewayError as GetGroupBadGatewayError } from "./types/GetGroup/GetGroupError";
import { GatewayTimeoutError as GetGroupGatewayTimeoutError } from "./types/GetGroup/GetGroupError";
import { UnauthorizedError as GetInformationsUnauthorizedError } from "./types/GetInformations/GetInformationsError";
import { NotFoundError as GetInformationsNotFoundError } from "./types/GetInformations/GetInformationsError";
import { InternalServerError as GetInformationsInternalServerError } from "./types/GetInformations/GetInformationsError";
import { BadGatewayError as GetInformationsBadGatewayError } from "./types/GetInformations/GetInformationsError";
import { GatewayTimeoutError as GetInformationsGatewayTimeoutError } from "./types/GetInformations/GetInformationsError";
import { InvalidParameterError as GetInvoiceInvalidParameterError } from "./types/GetInvoice/GetInvoiceError";
import { UnauthorizedError as GetInvoiceUnauthorizedError } from "./types/GetInvoice/GetInvoiceError";
import { NotFoundError as GetInvoiceNotFoundError } from "./types/GetInvoice/GetInvoiceError";
import { InternalServerError as GetInvoiceInternalServerError } from "./types/GetInvoice/GetInvoiceError";
import { BadGatewayError as GetInvoiceBadGatewayError } from "./types/GetInvoice/GetInvoiceError";
import { GatewayTimeoutError as GetInvoiceGatewayTimeoutError } from "./types/GetInvoice/GetInvoiceError";
import { InvalidParameterError as GetPlanInvalidParameterError } from "./types/GetPlan/GetPlanError";
import { UnauthorizedError as GetPlanUnauthorizedError } from "./types/GetPlan/GetPlanError";
import { NotFoundError as GetPlanNotFoundError } from "./types/GetPlan/GetPlanError";
import { InternalServerError as GetPlanInternalServerError } from "./types/GetPlan/GetPlanError";
import { BadGatewayError as GetPlanBadGatewayError } from "./types/GetPlan/GetPlanError";
import { GatewayTimeoutError as GetPlanGatewayTimeoutError } from "./types/GetPlan/GetPlanError";
import { InvalidParameterError as GetPlanGroupInvalidParameterError } from "./types/GetPlanGroup/GetPlanGroupError";
import { UnauthorizedError as GetPlanGroupUnauthorizedError } from "./types/GetPlanGroup/GetPlanGroupError";
import { NotFoundError as GetPlanGroupNotFoundError } from "./types/GetPlanGroup/GetPlanGroupError";
import { InternalServerError as GetPlanGroupInternalServerError } from "./types/GetPlanGroup/GetPlanGroupError";
import { BadGatewayError as GetPlanGroupBadGatewayError } from "./types/GetPlanGroup/GetPlanGroupError";
import { GatewayTimeoutError as GetPlanGroupGatewayTimeoutError } from "./types/GetPlanGroup/GetPlanGroupError";
import { UnauthorizedError as GetStripePaymentMethodUnauthorizedError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { InvalidModeOrPaymentProviderError as GetStripePaymentMethodInvalidModeOrPaymentProviderError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { NotFoundError as GetStripePaymentMethodNotFoundError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { InternalServerError as GetStripePaymentMethodInternalServerError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { BadGatewayError as GetStripePaymentMethodBadGatewayError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { GatewayTimeoutError as GetStripePaymentMethodGatewayTimeoutError } from "./types/GetStripePaymentMethod/GetStripePaymentMethodError";
import { UnauthorizedError as GetSubscriptionUnauthorizedError } from "./types/GetSubscription/GetSubscriptionError";
import { InternalServerError as GetSubscriptionInternalServerError } from "./types/GetSubscription/GetSubscriptionError";
import { BadGatewayError as GetSubscriptionBadGatewayError } from "./types/GetSubscription/GetSubscriptionError";
import { GatewayTimeoutError as GetSubscriptionGatewayTimeoutError } from "./types/GetSubscription/GetSubscriptionError";
import { UnauthorizedError as InitiatePaypalPaymentUnauthorizedError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { InvalidPaymentInformationsError as InitiatePaypalPaymentInvalidPaymentInformationsError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { InvalidSubscriptionError as InitiatePaypalPaymentInvalidSubscriptionError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { NoPaymentRequiredError as InitiatePaypalPaymentNoPaymentRequiredError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { NotFoundError as InitiatePaypalPaymentNotFoundError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { InternalServerError as InitiatePaypalPaymentInternalServerError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { BadGatewayError as InitiatePaypalPaymentBadGatewayError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { GatewayTimeoutError as InitiatePaypalPaymentGatewayTimeoutError } from "./types/InitiatePaypalPayment/InitiatePaypalPaymentError";
import { UnauthorizedError as InitiateStripePaymentUnauthorizedError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { InvalidPaymentInformationsError as InitiateStripePaymentInvalidPaymentInformationsError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { InvalidSubscriptionError as InitiateStripePaymentInvalidSubscriptionError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { NoPaymentRequiredError as InitiateStripePaymentNoPaymentRequiredError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { NotFoundError as InitiateStripePaymentNotFoundError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { InternalServerError as InitiateStripePaymentInternalServerError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { BadGatewayError as InitiateStripePaymentBadGatewayError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { GatewayTimeoutError as InitiateStripePaymentGatewayTimeoutError } from "./types/InitiateStripePayment/InitiateStripePaymentError";
import { InvalidParameterError as ListGroupPlansInvalidParameterError } from "./types/ListGroupPlans/ListGroupPlansError";
import { UnauthorizedError as ListGroupPlansUnauthorizedError } from "./types/ListGroupPlans/ListGroupPlansError";
import { NotFoundError as ListGroupPlansNotFoundError } from "./types/ListGroupPlans/ListGroupPlansError";
import { InternalServerError as ListGroupPlansInternalServerError } from "./types/ListGroupPlans/ListGroupPlansError";
import { BadGatewayError as ListGroupPlansBadGatewayError } from "./types/ListGroupPlans/ListGroupPlansError";
import { GatewayTimeoutError as ListGroupPlansGatewayTimeoutError } from "./types/ListGroupPlans/ListGroupPlansError";
import { UnauthorizedError as ListInvoicesUnauthorizedError } from "./types/ListInvoices/ListInvoicesError";
import { InternalServerError as ListInvoicesInternalServerError } from "./types/ListInvoices/ListInvoicesError";
import { BadGatewayError as ListInvoicesBadGatewayError } from "./types/ListInvoices/ListInvoicesError";
import { GatewayTimeoutError as ListInvoicesGatewayTimeoutError } from "./types/ListInvoices/ListInvoicesError";
import { UnauthorizedError as ListSubscriptionLimitsUnauthorizedError } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsError";
import { NotFoundError as ListSubscriptionLimitsNotFoundError } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsError";
import { InternalServerError as ListSubscriptionLimitsInternalServerError } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsError";
import { BadGatewayError as ListSubscriptionLimitsBadGatewayError } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsError";
import { GatewayTimeoutError as ListSubscriptionLimitsGatewayTimeoutError } from "./types/ListSubscriptionLimits/ListSubscriptionLimitsError";
import { InvalidParameterError as UnsubscribeSubscriptionInvalidParameterError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { UnauthorizedError as UnsubscribeSubscriptionUnauthorizedError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { NotFoundError as UnsubscribeSubscriptionNotFoundError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { InternalServerError as UnsubscribeSubscriptionInternalServerError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { BadGatewayError as UnsubscribeSubscriptionBadGatewayError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { GatewayTimeoutError as UnsubscribeSubscriptionGatewayTimeoutError } from "./types/UnsubscribeSubscription/UnsubscribeSubscriptionError";
import { InvalidVatNumberError as UpdateInformationsInvalidVatNumberError } from "./types/UpdateInformations/UpdateInformationsError";
import { InvalidParameterError as UpdateInformationsInvalidParameterError } from "./types/UpdateInformations/UpdateInformationsError";
import { UnauthorizedError as UpdateInformationsUnauthorizedError } from "./types/UpdateInformations/UpdateInformationsError";
import { VatNumberNotUpdatableError as UpdateInformationsVatNumberNotUpdatableError } from "./types/UpdateInformations/UpdateInformationsError";
import { NotFoundError as UpdateInformationsNotFoundError } from "./types/UpdateInformations/UpdateInformationsError";
import { InternalServerError as UpdateInformationsInternalServerError } from "./types/UpdateInformations/UpdateInformationsError";
import { BadGatewayError as UpdateInformationsBadGatewayError } from "./types/UpdateInformations/UpdateInformationsError";
import { GatewayTimeoutError as UpdateInformationsGatewayTimeoutError } from "./types/UpdateInformations/UpdateInformationsError";

export const errors = {
    CreateStripeSetupIntentError: {
        UnauthorizedError: CreateStripeSetupIntentUnauthorizedError,
        InvalidPaymentProviderError: CreateStripeSetupIntentInvalidPaymentProviderError,
        NotFoundError: CreateStripeSetupIntentNotFoundError,
        InternalServerError: CreateStripeSetupIntentInternalServerError,
        BadGatewayError: CreateStripeSetupIntentBadGatewayError,
        GatewayTimeoutError: CreateStripeSetupIntentGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateSubscriptionError: {
        InvalidParameterError: CreateSubscriptionInvalidParameterError,
        UnauthorizedError: CreateSubscriptionUnauthorizedError,
        InvalidPaymentInformationsError: CreateSubscriptionInvalidPaymentInformationsError,
        InvalidSubscriptionPlanError: CreateSubscriptionInvalidSubscriptionPlanError,
        InvalidTrialPlanError: CreateSubscriptionInvalidTrialPlanError,
        NotFoundError: CreateSubscriptionNotFoundError,
        InternalServerError: CreateSubscriptionInternalServerError,
        BadGatewayError: CreateSubscriptionBadGatewayError,
        GatewayTimeoutError: CreateSubscriptionGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ExecutePaypalPaymentError: {
        InvalidParameterError: ExecutePaypalPaymentInvalidParameterError,
        UnauthorizedError: ExecutePaypalPaymentUnauthorizedError,
        ConflictError: ExecutePaypalPaymentConflictError,
        InternalServerError: ExecutePaypalPaymentInternalServerError,
        BadGatewayError: ExecutePaypalPaymentBadGatewayError,
        GatewayTimeoutError: ExecutePaypalPaymentGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ExecuteStripePaymentError: {
        InvalidParameterError: ExecuteStripePaymentInvalidParameterError,
        UnauthorizedError: ExecuteStripePaymentUnauthorizedError,
        InvalidPaymentProviderError: ExecuteStripePaymentInvalidPaymentProviderError,
        NotFoundError: ExecuteStripePaymentNotFoundError,
        ConflictError: ExecuteStripePaymentConflictError,
        InternalServerError: ExecuteStripePaymentInternalServerError,
        BadGatewayError: ExecuteStripePaymentBadGatewayError,
        GatewayTimeoutError: ExecuteStripePaymentGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetGroupError: {
        InvalidParameterError: GetGroupInvalidParameterError,
        UnauthorizedError: GetGroupUnauthorizedError,
        NotFoundError: GetGroupNotFoundError,
        InternalServerError: GetGroupInternalServerError,
        BadGatewayError: GetGroupBadGatewayError,
        GatewayTimeoutError: GetGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetInformationsError: {
        UnauthorizedError: GetInformationsUnauthorizedError,
        NotFoundError: GetInformationsNotFoundError,
        InternalServerError: GetInformationsInternalServerError,
        BadGatewayError: GetInformationsBadGatewayError,
        GatewayTimeoutError: GetInformationsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetInvoiceError: {
        InvalidParameterError: GetInvoiceInvalidParameterError,
        UnauthorizedError: GetInvoiceUnauthorizedError,
        NotFoundError: GetInvoiceNotFoundError,
        InternalServerError: GetInvoiceInternalServerError,
        BadGatewayError: GetInvoiceBadGatewayError,
        GatewayTimeoutError: GetInvoiceGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetPlanError: {
        InvalidParameterError: GetPlanInvalidParameterError,
        UnauthorizedError: GetPlanUnauthorizedError,
        NotFoundError: GetPlanNotFoundError,
        InternalServerError: GetPlanInternalServerError,
        BadGatewayError: GetPlanBadGatewayError,
        GatewayTimeoutError: GetPlanGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetPlanGroupError: {
        InvalidParameterError: GetPlanGroupInvalidParameterError,
        UnauthorizedError: GetPlanGroupUnauthorizedError,
        NotFoundError: GetPlanGroupNotFoundError,
        InternalServerError: GetPlanGroupInternalServerError,
        BadGatewayError: GetPlanGroupBadGatewayError,
        GatewayTimeoutError: GetPlanGroupGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetStripePaymentMethodError: {
        UnauthorizedError: GetStripePaymentMethodUnauthorizedError,
        InvalidModeOrPaymentProviderError: GetStripePaymentMethodInvalidModeOrPaymentProviderError,
        NotFoundError: GetStripePaymentMethodNotFoundError,
        InternalServerError: GetStripePaymentMethodInternalServerError,
        BadGatewayError: GetStripePaymentMethodBadGatewayError,
        GatewayTimeoutError: GetStripePaymentMethodGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSubscriptionError: {
        UnauthorizedError: GetSubscriptionUnauthorizedError,
        InternalServerError: GetSubscriptionInternalServerError,
        BadGatewayError: GetSubscriptionBadGatewayError,
        GatewayTimeoutError: GetSubscriptionGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InitiatePaypalPaymentError: {
        UnauthorizedError: InitiatePaypalPaymentUnauthorizedError,
        InvalidPaymentInformationsError: InitiatePaypalPaymentInvalidPaymentInformationsError,
        InvalidSubscriptionError: InitiatePaypalPaymentInvalidSubscriptionError,
        NoPaymentRequiredError: InitiatePaypalPaymentNoPaymentRequiredError,
        NotFoundError: InitiatePaypalPaymentNotFoundError,
        InternalServerError: InitiatePaypalPaymentInternalServerError,
        BadGatewayError: InitiatePaypalPaymentBadGatewayError,
        GatewayTimeoutError: InitiatePaypalPaymentGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InitiateStripePaymentError: {
        UnauthorizedError: InitiateStripePaymentUnauthorizedError,
        InvalidPaymentInformationsError: InitiateStripePaymentInvalidPaymentInformationsError,
        InvalidSubscriptionError: InitiateStripePaymentInvalidSubscriptionError,
        NoPaymentRequiredError: InitiateStripePaymentNoPaymentRequiredError,
        NotFoundError: InitiateStripePaymentNotFoundError,
        InternalServerError: InitiateStripePaymentInternalServerError,
        BadGatewayError: InitiateStripePaymentBadGatewayError,
        GatewayTimeoutError: InitiateStripePaymentGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListGroupPlansError: {
        InvalidParameterError: ListGroupPlansInvalidParameterError,
        UnauthorizedError: ListGroupPlansUnauthorizedError,
        NotFoundError: ListGroupPlansNotFoundError,
        InternalServerError: ListGroupPlansInternalServerError,
        BadGatewayError: ListGroupPlansBadGatewayError,
        GatewayTimeoutError: ListGroupPlansGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListInvoicesError: {
        UnauthorizedError: ListInvoicesUnauthorizedError,
        InternalServerError: ListInvoicesInternalServerError,
        BadGatewayError: ListInvoicesBadGatewayError,
        GatewayTimeoutError: ListInvoicesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListSubscriptionLimitsError: {
        UnauthorizedError: ListSubscriptionLimitsUnauthorizedError,
        NotFoundError: ListSubscriptionLimitsNotFoundError,
        InternalServerError: ListSubscriptionLimitsInternalServerError,
        BadGatewayError: ListSubscriptionLimitsBadGatewayError,
        GatewayTimeoutError: ListSubscriptionLimitsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UnsubscribeSubscriptionError: {
        InvalidParameterError: UnsubscribeSubscriptionInvalidParameterError,
        UnauthorizedError: UnsubscribeSubscriptionUnauthorizedError,
        NotFoundError: UnsubscribeSubscriptionNotFoundError,
        InternalServerError: UnsubscribeSubscriptionInternalServerError,
        BadGatewayError: UnsubscribeSubscriptionBadGatewayError,
        GatewayTimeoutError: UnsubscribeSubscriptionGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateInformationsError: {
        InvalidVatNumberError: UpdateInformationsInvalidVatNumberError,
        InvalidParameterError: UpdateInformationsInvalidParameterError,
        UnauthorizedError: UpdateInformationsUnauthorizedError,
        VatNumberNotUpdatableError: UpdateInformationsVatNumberNotUpdatableError,
        NotFoundError: UpdateInformationsNotFoundError,
        InternalServerError: UpdateInformationsInternalServerError,
        BadGatewayError: UpdateInformationsBadGatewayError,
        GatewayTimeoutError: UpdateInformationsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
