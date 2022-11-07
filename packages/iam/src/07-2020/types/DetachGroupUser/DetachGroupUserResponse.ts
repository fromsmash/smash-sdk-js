import { DetachGroupUserOutput } from "./DetachGroupUser";
import { BadRequestError, NotFoundError } from "./DetachGroupUserError";

export type DetachGroupUserResponse = DetachGroupUserOutput | BadRequestError | NotFoundError;
