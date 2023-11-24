import { CreateTransferOutput } from "./CreateTransfer";
import { MissingSenderError, MissingReceiversError, InvalidDeliveryError, InvalidAvailabilityDurationError, InvalidParameterError, InvalidSubscriptionError, EmailNotAllowedError, UsageExceededError, PasswordRequiredError, EmailNotVerifiedError, CustomUrlAlreadyInUseError } from "./CreateTransferError";

export type CreateTransferResponse = CreateTransferOutput | MissingSenderError | MissingReceiversError | InvalidDeliveryError | InvalidAvailabilityDurationError | InvalidParameterError | InvalidSubscriptionError | EmailNotAllowedError | UsageExceededError | PasswordRequiredError | EmailNotVerifiedError | CustomUrlAlreadyInUseError;
