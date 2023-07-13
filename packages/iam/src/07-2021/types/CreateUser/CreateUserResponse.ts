import { CreateUserOutput } from "./CreateUser";
import { InvalidParameterError, InvalidSubscriptionError, ConflictError } from "./CreateUserError";

export type CreateUserResponse = CreateUserOutput | InvalidParameterError | InvalidSubscriptionError | ConflictError;
