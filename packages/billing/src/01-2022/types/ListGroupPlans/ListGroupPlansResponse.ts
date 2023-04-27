import { ListGroupPlansOutput } from "./ListGroupPlans";
import { InvalidParameterError, NotFoundError } from "./ListGroupPlansError";

export type ListGroupPlansResponse = ListGroupPlansOutput | InvalidParameterError | NotFoundError;
