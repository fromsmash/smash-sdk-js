import { GetGroupSCIMOutput } from "./GetGroupSCIM";
import { BadRequestError, NotFoundError } from "./GetGroupSCIMError";

export type GetGroupSCIMResponse = GetGroupSCIMOutput | BadRequestError | NotFoundError;
