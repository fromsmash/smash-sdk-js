import { DeleteGroupSCIMOutput } from "./DeleteGroupSCIM";
import { InvalidParameterError, NotFoundError } from "./DeleteGroupSCIMError";

export type DeleteGroupSCIMResponse = DeleteGroupSCIMOutput | InvalidParameterError | NotFoundError;
