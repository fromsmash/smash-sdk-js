import { ListTeamCustomizationsOutput } from "./ListTeamCustomizations";
import { InvalidParameterError, NotFoundError } from "./ListTeamCustomizationsError";

export type ListTeamCustomizationsResponse = ListTeamCustomizationsOutput | InvalidParameterError | NotFoundError;
