import { SDKError } from "@smash-sdk/core";

export class GenericError extends SDKError { }

export class BadRequestError extends GenericError { }

export class NotFoundError extends GenericError { }

export class InternalServerError extends GenericError { }

interface S3Error {
	name: string;
	code: number;
	requestId: string;
	message: string;
	resource?: string;
}

export class NoSuchUploadError extends GenericError {
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
export class AccessControlListNotSupportedError extends GenericError {
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
export class AccessDeniedError extends GenericError {
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
export class AccessPointAlreadyOwnedByYouError extends GenericError {
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
export class AccountProblemError extends GenericError {
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
export class AllAccessDisabledError extends GenericError {
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
export class AmbiguousGrantByEmailAddressError extends GenericError {
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
export class AuthorizationHeaderMalformedError extends GenericError {
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
export class BadDigestError extends GenericError {
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
export class EntityTooSmallError extends GenericError {
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
export class EntityTooLargeError extends GenericError {
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
export class ExpiredTokenError extends GenericError {
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
export class IllegalLocationConstraintExceptionError extends GenericError {
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
export class IllegalVersioningConfigurationExceptionError extends GenericError {
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
export class IncompleteBodyError extends GenericError {
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
export class InlineDataTooLargeError extends GenericError {
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
export class InternalError extends GenericError {
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
export class InvalidAccessKeyIdError extends GenericError {
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
export class InvalidArgumentError extends GenericError {
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
export class InvalidBucketNameError extends GenericError {
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
export class InvalidBucketStateError extends GenericError {
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
export class InvalidDigestError extends GenericError {
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
export class InvalidLocationConstraintError extends GenericError {
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
export class InvalidObjectStateError extends GenericError {
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
export class InvalidPartError extends GenericError {
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
export class InvalidPartOrderError extends GenericError {
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
export class InvalidPayerError extends GenericError {
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
export class InvalidPolicyDocumentError extends GenericError {
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
export class InvalidRangeError extends GenericError {
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
export class InvalidRequestError extends GenericError {
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
export class InvalidSecurityError extends GenericError {
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
export class InvalidTokenError extends GenericError {
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
export class InvalidURIError extends GenericError {
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
export class KeyTooLongError extends GenericError {
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
export class MaxMessageLengthExceededError extends GenericError {
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
export class MetadataTooLargeError extends GenericError {
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
export class MissingContentLengthError extends GenericError {
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
export class MissingRequestBodyError extends GenericError {
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
export class MissingSecurityHeaderError extends GenericError {
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
export class NoSuchBucketError extends GenericError {
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
export class NoSuchBucketPolicyError extends GenericError {
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
export class NoSuchCORSConfigurationError extends GenericError {
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
export class NoSuchKeyError extends GenericError {
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
export class NotImplementedError extends GenericError {
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
export class RequestHeaderSectionTooLargeError extends GenericError {
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
export class RequestTimeoutError extends GenericError {
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
export class RequestTimeTooSkewedError extends GenericError {
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
export class ServerSideEncryptionConfigurationNotFoundError extends GenericError {
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
export class ServiceUnavailableError extends GenericError {
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
export class SignatureDoesNotMatchError extends GenericError {
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
export class SlowDownError extends GenericError {
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
export class TokenRefreshRequiredError extends GenericError {
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
export class UnexpectedContentError extends GenericError {
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
export class UserKeyMustBeSpecifiedError extends GenericError {
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
        GenericError,
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
