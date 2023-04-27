import { ListGroupsSCIMOutput } from "./ListGroupsSCIM";
import { InvalidParameterError } from "./ListGroupsSCIMError";

export type ListGroupsSCIMResponse = ListGroupsSCIMOutput | InvalidParameterError;
