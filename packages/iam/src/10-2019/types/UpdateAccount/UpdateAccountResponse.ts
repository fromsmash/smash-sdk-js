import { UpdateAccountOutput } from "./UpdateAccount";
import { BadRequestError } from "./UpdateAccountError";

export type UpdateAccountResponse = UpdateAccountOutput | BadRequestError;
