import { DeleteGroupOutput } from "./DeleteGroup";
import { BadRequestError, NotFoundError } from "./DeleteGroupError";

export type DeleteGroupResponse = DeleteGroupOutput | BadRequestError | NotFoundError;
