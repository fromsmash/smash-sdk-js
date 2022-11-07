import { ListTeamUsersOutput } from "./ListTeamUsers";
import { BadRequestError, NotFoundError } from "./ListTeamUsersError";

export type ListTeamUsersResponse = ListTeamUsersOutput | BadRequestError | NotFoundError;
