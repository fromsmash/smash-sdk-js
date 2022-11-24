import { ChangePasswordOutput } from "./ChangePassword";
import { BadRequestError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ChangePasswordError";

export type ChangePasswordResponse = ChangePasswordOutput | BadRequestError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
