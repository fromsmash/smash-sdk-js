import { RotateUserKeyOutput } from "./RotateUserKey";
import { InvalidParameterError, NotFoundError } from "./RotateUserKeyError";

export type RotateUserKeyResponse = RotateUserKeyOutput | InvalidParameterError | NotFoundError;
