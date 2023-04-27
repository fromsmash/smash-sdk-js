import { CreateTeamTransferOutput } from "./CreateTeamTransfer";
import { MissingSenderError, MissingReceiversError, InvalidDeliveryError, InvalidAvailabilityDurationError, InvalidParameterError, InvalidSubscriptionError, EmailNotAllowedError, UsageExceededError, PasswordRequiredError, CustomUrlAlreadyInUseError } from "./CreateTeamTransferError";

export type CreateTeamTransferResponse = CreateTeamTransferOutput | MissingSenderError | MissingReceiversError | InvalidDeliveryError | InvalidAvailabilityDurationError | InvalidParameterError | InvalidSubscriptionError | EmailNotAllowedError | UsageExceededError | PasswordRequiredError | CustomUrlAlreadyInUseError;
