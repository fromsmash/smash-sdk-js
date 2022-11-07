import { AttachGroupUserOutput } from "./AttachGroupUser";
import { BadRequestError, NotFoundError } from "./AttachGroupUserError";

export type AttachGroupUserResponse = AttachGroupUserOutput | BadRequestError | NotFoundError;
