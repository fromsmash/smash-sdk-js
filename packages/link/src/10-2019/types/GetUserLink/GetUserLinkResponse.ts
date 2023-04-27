import { GetUserLinkOutput } from "./GetUserLink";
import { InvalidParameterError, NotFoundError } from "./GetUserLinkError";

export type GetUserLinkResponse = GetUserLinkOutput | InvalidParameterError | NotFoundError;
