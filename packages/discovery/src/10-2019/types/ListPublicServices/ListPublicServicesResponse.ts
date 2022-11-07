import { ListPublicServicesOutput } from "./ListPublicServices";
import { BadRequestError } from "./ListPublicServicesError";

export type ListPublicServicesResponse = ListPublicServicesOutput | BadRequestError;
