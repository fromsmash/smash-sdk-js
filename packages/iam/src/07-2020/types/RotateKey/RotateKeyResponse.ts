import { RotateKeyOutput } from "./RotateKey";
import { NotFoundError } from "./RotateKeyError";

export type RotateKeyResponse = RotateKeyOutput | NotFoundError;
