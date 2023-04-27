import { GetInformationsOutput } from "./GetInformations";
import { NotFoundError } from "./GetInformationsError";

export type GetInformationsResponse = GetInformationsOutput | NotFoundError;
