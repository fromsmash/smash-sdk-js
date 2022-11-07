import { ChangePasswordOutput } from "./ChangePassword";
import { BadRequestError, InvalidSecretError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ChangePasswordError";

export type ChangePasswordResponse = ChangePasswordOutput | BadRequestError | InvalidSecretError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
