import { PatchUserSCIMOutput } from "./PatchUserSCIM";
import { BadRequestError, NotFoundError } from "./PatchUserSCIMError";

export type PatchUserSCIMResponse = PatchUserSCIMOutput | BadRequestError | NotFoundError;
