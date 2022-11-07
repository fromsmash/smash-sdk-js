import { GetUserOutput } from "./GetUser";
import { BadRequestError, NotFoundError } from "./GetUserError";

export type GetUserResponse = GetUserOutput | BadRequestError | NotFoundError;
