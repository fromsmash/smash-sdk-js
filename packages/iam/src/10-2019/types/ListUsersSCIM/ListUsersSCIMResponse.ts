import { ListUsersSCIMOutput } from "./ListUsersSCIM";
import { BadRequestError } from "./ListUsersSCIMError";

export type ListUsersSCIMResponse = ListUsersSCIMOutput | BadRequestError;
