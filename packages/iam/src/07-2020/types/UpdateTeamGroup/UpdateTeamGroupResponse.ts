import { UpdateTeamGroupOutput } from "./UpdateTeamGroup";
import { InvalidParameterError, NotFoundError } from "./UpdateTeamGroupError";

export type UpdateTeamGroupResponse = UpdateTeamGroupOutput | InvalidParameterError | NotFoundError;
