import { PatchGroupSCIMOutput } from "./PatchGroupSCIM";
import { InvalidParameterError, NotFoundError } from "./PatchGroupSCIMError";

export type PatchGroupSCIMResponse = PatchGroupSCIMOutput | InvalidParameterError | NotFoundError;
