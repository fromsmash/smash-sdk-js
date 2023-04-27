import { ListUsersSCIMOutput } from "./ListUsersSCIM";
import { InvalidParameterError } from "./ListUsersSCIMError";

export type ListUsersSCIMResponse = ListUsersSCIMOutput | InvalidParameterError;
