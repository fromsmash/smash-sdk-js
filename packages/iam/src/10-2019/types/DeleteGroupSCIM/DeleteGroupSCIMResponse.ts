import { DeleteGroupSCIMOutput } from "./DeleteGroupSCIM";
import { BadRequestError, NotFoundError } from "./DeleteGroupSCIMError";

export type DeleteGroupSCIMResponse = DeleteGroupSCIMOutput | BadRequestError | NotFoundError;
