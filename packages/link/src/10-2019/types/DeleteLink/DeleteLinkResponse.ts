import { DeleteLinkOutput } from "./DeleteLink";
import { InvalidParameterError, NotFoundError } from "./DeleteLinkError";

export type DeleteLinkResponse = DeleteLinkOutput | InvalidParameterError | NotFoundError;
