import { UpdateGroupSCIMOutput } from "./UpdateGroupSCIM";
import { InvalidParameterError, NotFoundError } from "./UpdateGroupSCIMError";

export type UpdateGroupSCIMResponse = UpdateGroupSCIMOutput | InvalidParameterError | NotFoundError;
