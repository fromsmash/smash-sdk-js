import { UpdateGroupOutput } from "./UpdateGroup";
import { InvalidParameterError, NotFoundError } from "./UpdateGroupError";

export type UpdateGroupResponse = UpdateGroupOutput | InvalidParameterError | NotFoundError;
