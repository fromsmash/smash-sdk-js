import { AttachGroupUserOutput } from "./AttachGroupUser";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachGroupUserError";

export type AttachGroupUserResponse = AttachGroupUserOutput | InvalidParameterError | NotFoundError | ConflictError;
