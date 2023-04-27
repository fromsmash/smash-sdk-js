import { GetGroupOutput } from "./GetGroup";
import { InvalidParameterError, NotFoundError } from "./GetGroupError";

export type GetGroupResponse = GetGroupOutput | InvalidParameterError | NotFoundError;
