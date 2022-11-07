import { GetGroupOutput } from "./GetGroup";
import { BadRequestError, NotFoundError } from "./GetGroupError";

export type GetGroupResponse = GetGroupOutput | BadRequestError | NotFoundError;
