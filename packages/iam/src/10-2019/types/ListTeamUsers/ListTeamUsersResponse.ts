import { ListTeamUsersOutput } from "./ListTeamUsers";
import { InvalidParameterError, NotFoundError } from "./ListTeamUsersError";

export type ListTeamUsersResponse = ListTeamUsersOutput | InvalidParameterError | NotFoundError;
