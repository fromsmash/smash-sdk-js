import { PatchGroupSCIMOutput } from "./PatchGroupSCIM";
import { BadRequestError, NotFoundError } from "./PatchGroupSCIMError";

export type PatchGroupSCIMResponse = PatchGroupSCIMOutput | BadRequestError | NotFoundError;
