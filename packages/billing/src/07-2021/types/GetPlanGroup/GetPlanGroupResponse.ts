import { GetPlanGroupOutput } from "./GetPlanGroup";
import { InvalidParameterError, NotFoundError } from "./GetPlanGroupError";

export type GetPlanGroupResponse = GetPlanGroupOutput | InvalidParameterError | NotFoundError;
