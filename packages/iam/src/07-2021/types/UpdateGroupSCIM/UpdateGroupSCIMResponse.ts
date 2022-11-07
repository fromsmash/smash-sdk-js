import { UpdateGroupSCIMOutput } from "./UpdateGroupSCIM";
import { BadRequestError, NotFoundError } from "./UpdateGroupSCIMError";

export type UpdateGroupSCIMResponse = UpdateGroupSCIMOutput | BadRequestError | NotFoundError;
