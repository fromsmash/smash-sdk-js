import { GetImageOutput } from "./GetImage";
import { InvalidParameterError, NotFoundError } from "./GetImageError";

export type GetImageResponse = GetImageOutput | InvalidParameterError | NotFoundError;
