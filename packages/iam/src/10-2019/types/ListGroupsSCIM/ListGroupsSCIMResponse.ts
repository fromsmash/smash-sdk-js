import { ListGroupsSCIMOutput } from "./ListGroupsSCIM";
import { BadRequestError } from "./ListGroupsSCIMError";

export type ListGroupsSCIMResponse = ListGroupsSCIMOutput | BadRequestError;
