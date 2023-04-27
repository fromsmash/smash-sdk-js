import { GetPlanOutput } from "./GetPlan";
import { InvalidParameterError, NotFoundError } from "./GetPlanError";

export type GetPlanResponse = GetPlanOutput | InvalidParameterError | NotFoundError;
