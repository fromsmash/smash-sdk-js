import { ListUserLinksOutput } from "./ListUserLinks";
import { InvalidParameterError } from "./ListUserLinksError";

export type ListUserLinksResponse = ListUserLinksOutput | InvalidParameterError;
