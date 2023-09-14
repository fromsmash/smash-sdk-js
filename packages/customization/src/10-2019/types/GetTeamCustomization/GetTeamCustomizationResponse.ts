import { GetTeamCustomizationOutput } from "./GetTeamCustomization";
import { InvalidParameterError, NotFoundError } from "./GetTeamCustomizationError";

export type GetTeamCustomizationResponse = GetTeamCustomizationOutput | InvalidParameterError | NotFoundError;
