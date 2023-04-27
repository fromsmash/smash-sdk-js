import { ListTeamGroupUsersOutput } from "./ListTeamGroupUsers";
import { InvalidParameterError, NotFoundError } from "./ListTeamGroupUsersError";

export type ListTeamGroupUsersResponse = ListTeamGroupUsersOutput | InvalidParameterError | NotFoundError;
