import { ListUserGroupsTeamsOutput } from "./ListUserGroupsTeams";
import { InvalidParameterError, NotFoundError } from "./ListUserGroupsTeamsError";

export type ListUserGroupsTeamsResponse = ListUserGroupsTeamsOutput | InvalidParameterError | NotFoundError;
