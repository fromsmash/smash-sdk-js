import { UpdateTeamGroupOutput } from "./UpdateTeamGroup";
import { BadRequestError, NotFoundError } from "./UpdateTeamGroupError";

export type UpdateTeamGroupResponse = UpdateTeamGroupOutput | BadRequestError | NotFoundError;
