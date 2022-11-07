import { ListUserGroupsTeamsOutput } from "./ListUserGroupsTeams";
import { BadRequestError, NotFoundError } from "./ListUserGroupsTeamsError";

export type ListUserGroupsTeamsResponse = ListUserGroupsTeamsOutput | BadRequestError | NotFoundError;
