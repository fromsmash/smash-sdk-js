import { DetachGroupUserOutput } from "./DetachGroupUser";
import { InvalidParameterError, NotFoundError } from "./DetachGroupUserError";

export type DetachGroupUserResponse = DetachGroupUserOutput | InvalidParameterError | NotFoundError;
