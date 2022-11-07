import { RotateKeyOutput } from "./RotateKey";
import { BadRequestError } from "./RotateKeyError";

export type RotateKeyResponse = RotateKeyOutput | BadRequestError;
