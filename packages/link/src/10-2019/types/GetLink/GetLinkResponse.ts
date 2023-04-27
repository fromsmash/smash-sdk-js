import { GetLinkOutput } from "./GetLink";
import { InvalidParameterError, NotFoundError } from "./GetLinkError";

export type GetLinkResponse = GetLinkOutput | InvalidParameterError | NotFoundError;
