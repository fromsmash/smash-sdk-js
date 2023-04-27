import { DeleteGroupOutput } from "./DeleteGroup";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./DeleteGroupError";

export type DeleteGroupResponse = DeleteGroupOutput | InvalidParameterError | NotFoundError | ForbiddenError;
