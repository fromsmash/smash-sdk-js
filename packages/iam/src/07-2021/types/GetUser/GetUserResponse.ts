import { GetUserOutput } from "./GetUser";
import { InvalidParameterError, NotFoundError } from "./GetUserError";

export type GetUserResponse = GetUserOutput | InvalidParameterError | NotFoundError;
