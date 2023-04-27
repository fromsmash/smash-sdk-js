import { CreateImageOutput } from "./CreateImage";
import { InvalidParameterError, ConflictError } from "./CreateImageError";

export type CreateImageResponse = CreateImageOutput | InvalidParameterError | ConflictError;
