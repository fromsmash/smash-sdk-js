import { RotateUserKeyOutput } from "./RotateUserKey";
import { BadRequestError, NotFoundError } from "./RotateUserKeyError";

export type RotateUserKeyResponse = RotateUserKeyOutput | BadRequestError | NotFoundError;
