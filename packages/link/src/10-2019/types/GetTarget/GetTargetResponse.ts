import { GetTargetOutput } from "./GetTarget";
import { InvalidParameterError, NotFoundError } from "./GetTargetError";

export type GetTargetResponse = GetTargetOutput | InvalidParameterError | NotFoundError;
