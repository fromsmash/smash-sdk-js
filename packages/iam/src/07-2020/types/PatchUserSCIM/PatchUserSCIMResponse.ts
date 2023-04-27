import { PatchUserSCIMOutput } from "./PatchUserSCIM";
import { InvalidParameterError, NotFoundError } from "./PatchUserSCIMError";

export type PatchUserSCIMResponse = PatchUserSCIMOutput | InvalidParameterError | NotFoundError;
