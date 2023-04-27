import { UpdateInformationsOutput } from "./UpdateInformations";
import { InvalidVatNumberError, InvalidParameterError, NotFoundError, VatNumberNotUpdatableError } from "./UpdateInformationsError";

export type UpdateInformationsResponse = UpdateInformationsOutput | InvalidVatNumberError | InvalidParameterError | NotFoundError | VatNumberNotUpdatableError;
