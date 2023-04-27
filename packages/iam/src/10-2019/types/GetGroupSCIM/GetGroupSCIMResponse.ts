import { GetGroupSCIMOutput } from "./GetGroupSCIM";
import { InvalidParameterError, NotFoundError } from "./GetGroupSCIMError";

export type GetGroupSCIMResponse = GetGroupSCIMOutput | InvalidParameterError | NotFoundError;
