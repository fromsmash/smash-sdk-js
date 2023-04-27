import { SDKError } from "@smash-sdk/core";

export class BadRequestError extends SDKError { }

export class NotFoundError extends SDKError { }

export class InternalServerError extends SDKError { }

interface S3Error {
	name: string;
	code: number;
	requestId: string;
	message: string;
	resource?: string;
}
export class NoSuchUploadError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AccessControlListNotSupportedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AccessDeniedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AccessPointAlreadyOwnedByYouError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AccountProblemError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AllAccessDisabledError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AmbiguousGrantByEmailAddressError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class AuthorizationHeaderMalformedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class BadDigestError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class EntityTooSmallError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class EntityTooLargeError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class ExpiredTokenError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class IllegalLocationConstraintExceptionError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class IllegalVersioningConfigurationExceptionError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class IncompleteBodyError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InlineDataTooLargeError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InternalError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidAccessKeyIdError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidArgumentError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidBucketNameError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidBucketStateError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidDigestError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidLocationConstraintError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidObjectStateError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidPartError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidPartOrderError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidPayerError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidPolicyDocumentError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidRangeError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidRequestError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidSecurityError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidTokenError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class InvalidURIError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class KeyTooLongError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class MaxMessageLengthExceededError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class MetadataTooLargeError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class MissingContentLengthError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class MissingRequestBodyError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class MissingSecurityHeaderError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class NoSuchBucketError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class NoSuchBucketPolicyError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class NoSuchCORSConfigurationError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class NoSuchKeyError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class NotImplementedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class RequestHeaderSectionTooLargeError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}       
export class RequestTimeoutError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class RequestTimeTooSkewedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class ServerSideEncryptionConfigurationNotFoundError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class ServiceUnavailableError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class SignatureDoesNotMatchError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class SlowDownError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class TokenRefreshRequiredError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class UnexpectedContentError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}
export class UserKeyMustBeSpecifiedError extends SDKError {
        name: string;
        code: number;
        requestId: string;
        resource?: string;
        message: string;

        constructor(error: S3Error) {
                super(error.name);
                this.name = error.name;
                this.code = error.code;
                this.requestId = error.requestId;
                this.resource = error.resource;
                this.message = error.message;
        }
}

export default {
        BadRequestError,
        InternalServerError,
        NotFoundError,
        NoSuchUploadError,
        AccessControlListNotSupportedError,
        AccessDeniedError,
        AccessPointAlreadyOwnedByYouError,
        AccountProblemError,
        AllAccessDisabledError,
        AmbiguousGrantByEmailAddressError,
        AuthorizationHeaderMalformedError,
        BadDigestError,
        EntityTooSmallError,
        EntityTooLargeError,
        ExpiredTokenError,
        IllegalLocationConstraintExceptionError,
        IllegalVersioningConfigurationExceptionError,
        IncompleteBodyError,
        InlineDataTooLargeError,
        InternalError,
        InvalidAccessKeyIdError,
        InvalidArgumentError,
        InvalidBucketNameError,
        InvalidBucketStateError,
        InvalidDigestError,
        InvalidLocationConstraintError,
        InvalidObjectStateError,
        InvalidPartError,
        InvalidPartOrderError,
        InvalidPayerError,
        InvalidPolicyDocumentError,
        InvalidRangeError,
        InvalidRequestError,
        InvalidSecurityError,
        InvalidTokenError,
        InvalidURIError,
        KeyTooLongError,
        MaxMessageLengthExceededError,
        MetadataTooLargeError,
        MissingContentLengthError,
        MissingRequestBodyError,
        MissingSecurityHeaderError,
        NoSuchBucketError,
        NoSuchBucketPolicyError,
        NoSuchCORSConfigurationError,
        NoSuchKeyError,
        NotImplementedError,
        RequestHeaderSectionTooLargeError,
        RequestTimeoutError,
        RequestTimeTooSkewedError,
        ServerSideEncryptionConfigurationNotFoundError,
        ServiceUnavailableError,
        SignatureDoesNotMatchError,
        SlowDownError,
        TokenRefreshRequiredError,
        UnexpectedContentError,
        UserKeyMustBeSpecifiedError,
};
