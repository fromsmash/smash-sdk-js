import { ListTeamGroupUsersOutput } from "./ListTeamGroupUsers";
import { BadRequestError, NotFoundError } from "./ListTeamGroupUsersError";

export type ListTeamGroupUsersResponse = ListTeamGroupUsersOutput | BadRequestError | NotFoundError;
