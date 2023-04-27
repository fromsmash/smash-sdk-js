import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as ChangePasswordInvalidParameterError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidPasswordSecretError as ChangePasswordInvalidPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { ExpiredPasswordSecretError as ChangePasswordExpiredPasswordSecretError } from "./types/ChangePassword/ChangePasswordError";
import { InternalServerError as ChangePasswordInternalServerError } from "./types/ChangePassword/ChangePasswordError";
import { BadGatewayError as ChangePasswordBadGatewayError } from "./types/ChangePassword/ChangePasswordError";
import { GatewayTimeoutError as ChangePasswordGatewayTimeoutError } from "./types/ChangePassword/ChangePasswordError";
import { InvalidParameterError as CreateTokenInvalidParameterError } from "./types/CreateToken/CreateTokenError";
import { BadCredentialsError as CreateTokenBadCredentialsError } from "./types/CreateToken/CreateTokenError";
import { PasswordRevokedError as CreateTokenPasswordRevokedError } from "./types/CreateToken/CreateTokenError";
import { IdentityDisabledError as CreateTokenIdentityDisabledError } from "./types/CreateToken/CreateTokenError";
import { WrongAuthError as CreateTokenWrongAuthError } from "./types/CreateToken/CreateTokenError";
import { NotFoundError as CreateTokenNotFoundError } from "./types/CreateToken/CreateTokenError";
import { ConflictError as CreateTokenConflictError } from "./types/CreateToken/CreateTokenError";
import { InternalServerError as CreateTokenInternalServerError } from "./types/CreateToken/CreateTokenError";
import { BadGatewayError as CreateTokenBadGatewayError } from "./types/CreateToken/CreateTokenError";
import { GatewayTimeoutError as CreateTokenGatewayTimeoutError } from "./types/CreateToken/CreateTokenError";
import { InvalidParameterError as ForgotPasswordInvalidParameterError } from "./types/ForgotPassword/ForgotPasswordError";
import { InternalServerError as ForgotPasswordInternalServerError } from "./types/ForgotPassword/ForgotPasswordError";
import { BadGatewayError as ForgotPasswordBadGatewayError } from "./types/ForgotPassword/ForgotPasswordError";
import { GatewayTimeoutError as ForgotPasswordGatewayTimeoutError } from "./types/ForgotPassword/ForgotPasswordError";
import { InvalidParameterError as GetSigninConfigurationInvalidParameterError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { NotFoundError as GetSigninConfigurationNotFoundError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { InternalServerError as GetSigninConfigurationInternalServerError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { BadGatewayError as GetSigninConfigurationBadGatewayError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { GatewayTimeoutError as GetSigninConfigurationGatewayTimeoutError } from "./types/GetSigninConfiguration/GetSigninConfigurationError";
import { InvalidParameterError as ResetPasswordInvalidParameterError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidSecretError as ResetPasswordInvalidSecretError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidPasswordSecretError as ResetPasswordInvalidPasswordSecretError } from "./types/ResetPassword/ResetPasswordError";
import { ExpiredPasswordSecretError as ResetPasswordExpiredPasswordSecretError } from "./types/ResetPassword/ResetPasswordError";
import { InternalServerError as ResetPasswordInternalServerError } from "./types/ResetPassword/ResetPasswordError";
import { BadGatewayError as ResetPasswordBadGatewayError } from "./types/ResetPassword/ResetPasswordError";
import { GatewayTimeoutError as ResetPasswordGatewayTimeoutError } from "./types/ResetPassword/ResetPasswordError";
import { InvalidParameterError as SSOSignInInvalidParameterError } from "./types/SSOSignIn/SSOSignInError";
import { ConflictError as SSOSignInConflictError } from "./types/SSOSignIn/SSOSignInError";
import { InternalServerError as SSOSignInInternalServerError } from "./types/SSOSignIn/SSOSignInError";
import { BadGatewayError as SSOSignInBadGatewayError } from "./types/SSOSignIn/SSOSignInError";
import { GatewayTimeoutError as SSOSignInGatewayTimeoutError } from "./types/SSOSignIn/SSOSignInError";

export const errors = {
    ChangePasswordError: {
        InvalidParameterError: ChangePasswordInvalidParameterError,
        InvalidPasswordSecretError: ChangePasswordInvalidPasswordSecretError,
        ExpiredPasswordSecretError: ChangePasswordExpiredPasswordSecretError,
        InternalServerError: ChangePasswordInternalServerError,
        BadGatewayError: ChangePasswordBadGatewayError,
        GatewayTimeoutError: ChangePasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTokenError: {
        InvalidParameterError: CreateTokenInvalidParameterError,
        BadCredentialsError: CreateTokenBadCredentialsError,
        PasswordRevokedError: CreateTokenPasswordRevokedError,
        IdentityDisabledError: CreateTokenIdentityDisabledError,
        WrongAuthError: CreateTokenWrongAuthError,
        NotFoundError: CreateTokenNotFoundError,
        ConflictError: CreateTokenConflictError,
        InternalServerError: CreateTokenInternalServerError,
        BadGatewayError: CreateTokenBadGatewayError,
        GatewayTimeoutError: CreateTokenGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ForgotPasswordError: {
        InvalidParameterError: ForgotPasswordInvalidParameterError,
        InternalServerError: ForgotPasswordInternalServerError,
        BadGatewayError: ForgotPasswordBadGatewayError,
        GatewayTimeoutError: ForgotPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetSigninConfigurationError: {
        InvalidParameterError: GetSigninConfigurationInvalidParameterError,
        NotFoundError: GetSigninConfigurationNotFoundError,
        InternalServerError: GetSigninConfigurationInternalServerError,
        BadGatewayError: GetSigninConfigurationBadGatewayError,
        GatewayTimeoutError: GetSigninConfigurationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ResetPasswordError: {
        InvalidParameterError: ResetPasswordInvalidParameterError,
        InvalidSecretError: ResetPasswordInvalidSecretError,
        InvalidPasswordSecretError: ResetPasswordInvalidPasswordSecretError,
        ExpiredPasswordSecretError: ResetPasswordExpiredPasswordSecretError,
        InternalServerError: ResetPasswordInternalServerError,
        BadGatewayError: ResetPasswordBadGatewayError,
        GatewayTimeoutError: ResetPasswordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    SSOSignInError: {
        InvalidParameterError: SSOSignInInvalidParameterError,
        ConflictError: SSOSignInConflictError,
        InternalServerError: SSOSignInInternalServerError,
        BadGatewayError: SSOSignInBadGatewayError,
        GatewayTimeoutError: SSOSignInGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
