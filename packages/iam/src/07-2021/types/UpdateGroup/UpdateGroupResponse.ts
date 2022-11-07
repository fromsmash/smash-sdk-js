import { UpdateGroupOutput } from "./UpdateGroup";
import { BadRequestError, NotFoundError } from "./UpdateGroupError";

export type UpdateGroupResponse = UpdateGroupOutput | BadRequestError | NotFoundError;
