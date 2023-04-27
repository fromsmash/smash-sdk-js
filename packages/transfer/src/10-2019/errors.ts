import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as ListTeamTransferEventsInvalidParameterError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { UnauthorizedError as ListTeamTransferEventsUnauthorizedError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { NotFoundError as ListTeamTransferEventsNotFoundError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { InternalServerError as ListTeamTransferEventsInternalServerError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { BadGatewayError as ListTeamTransferEventsBadGatewayError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { GatewayTimeoutError as ListTeamTransferEventsGatewayTimeoutError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { InvalidParameterError as ListTeamTransferFilesInvalidParameterError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { UnauthorizedError as ListTeamTransferFilesUnauthorizedError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { ForbiddenError as ListTeamTransferFilesForbiddenError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { NotFoundError as ListTeamTransferFilesNotFoundError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { InternalServerError as ListTeamTransferFilesInternalServerError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { BadGatewayError as ListTeamTransferFilesBadGatewayError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { GatewayTimeoutError as ListTeamTransferFilesGatewayTimeoutError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { InvalidParameterError as ListTeamTransfersInvalidParameterError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { UnauthorizedError as ListTeamTransfersUnauthorizedError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { ForbiddenError as ListTeamTransfersForbiddenError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { NotFoundError as ListTeamTransfersNotFoundError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { InternalServerError as ListTeamTransfersInternalServerError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { BadGatewayError as ListTeamTransfersBadGatewayError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { GatewayTimeoutError as ListTeamTransfersGatewayTimeoutError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { InvalidParameterError as ListTeamUserTransfersInvalidParameterError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { UnauthorizedError as ListTeamUserTransfersUnauthorizedError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { InternalServerError as ListTeamUserTransfersInternalServerError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { BadGatewayError as ListTeamUserTransfersBadGatewayError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { GatewayTimeoutError as ListTeamUserTransfersGatewayTimeoutError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { InvalidParameterError as ListTransferEventsInvalidParameterError } from "./types/ListTransferEvents/ListTransferEventsError";
import { UnauthorizedError as ListTransferEventsUnauthorizedError } from "./types/ListTransferEvents/ListTransferEventsError";
import { NotFoundError as ListTransferEventsNotFoundError } from "./types/ListTransferEvents/ListTransferEventsError";
import { InternalServerError as ListTransferEventsInternalServerError } from "./types/ListTransferEvents/ListTransferEventsError";
import { BadGatewayError as ListTransferEventsBadGatewayError } from "./types/ListTransferEvents/ListTransferEventsError";
import { GatewayTimeoutError as ListTransferEventsGatewayTimeoutError } from "./types/ListTransferEvents/ListTransferEventsError";
import { InvalidParameterError as ListTransferFilesInvalidParameterError } from "./types/ListTransferFiles/ListTransferFilesError";
import { UnauthorizedError as ListTransferFilesUnauthorizedError } from "./types/ListTransferFiles/ListTransferFilesError";
import { NotFoundError as ListTransferFilesNotFoundError } from "./types/ListTransferFiles/ListTransferFilesError";
import { InternalServerError as ListTransferFilesInternalServerError } from "./types/ListTransferFiles/ListTransferFilesError";
import { BadGatewayError as ListTransferFilesBadGatewayError } from "./types/ListTransferFiles/ListTransferFilesError";
import { GatewayTimeoutError as ListTransferFilesGatewayTimeoutError } from "./types/ListTransferFiles/ListTransferFilesError";
import { InvalidParameterError as ListTransferFilesPreviewInvalidParameterError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { UnauthorizedError as ListTransferFilesPreviewUnauthorizedError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { PasswordDoesNotMatchError as ListTransferFilesPreviewPasswordDoesNotMatchError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { OwnerUsageExceededError as ListTransferFilesPreviewOwnerUsageExceededError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { AccessorUsageExceededError as ListTransferFilesPreviewAccessorUsageExceededError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { NotFoundError as ListTransferFilesPreviewNotFoundError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { InternalServerError as ListTransferFilesPreviewInternalServerError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { BadGatewayError as ListTransferFilesPreviewBadGatewayError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { GatewayTimeoutError as ListTransferFilesPreviewGatewayTimeoutError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { UnauthorizedError as ListTransfersUnauthorizedError } from "./types/ListTransfers/ListTransfersError";
import { NotFoundError as ListTransfersNotFoundError } from "./types/ListTransfers/ListTransfersError";
import { InternalServerError as ListTransfersInternalServerError } from "./types/ListTransfers/ListTransfersError";
import { BadGatewayError as ListTransfersBadGatewayError } from "./types/ListTransfers/ListTransfersError";
import { GatewayTimeoutError as ListTransfersGatewayTimeoutError } from "./types/ListTransfers/ListTransfersError";
import { InvalidParameterError as ListUserTransferEventsInvalidParameterError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { UnauthorizedError as ListUserTransferEventsUnauthorizedError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { NotFoundError as ListUserTransferEventsNotFoundError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { InternalServerError as ListUserTransferEventsInternalServerError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { BadGatewayError as ListUserTransferEventsBadGatewayError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { GatewayTimeoutError as ListUserTransferEventsGatewayTimeoutError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { InvalidParameterError as ListUserTransferFilesInvalidParameterError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { UnauthorizedError as ListUserTransferFilesUnauthorizedError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { NotFoundError as ListUserTransferFilesNotFoundError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { InternalServerError as ListUserTransferFilesInternalServerError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { BadGatewayError as ListUserTransferFilesBadGatewayError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { GatewayTimeoutError as ListUserTransferFilesGatewayTimeoutError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { InvalidParameterError as ListUserTransfersInvalidParameterError } from "./types/ListUserTransfers/ListUserTransfersError";
import { UnauthorizedError as ListUserTransfersUnauthorizedError } from "./types/ListUserTransfers/ListUserTransfersError";
import { NotFoundError as ListUserTransfersNotFoundError } from "./types/ListUserTransfers/ListUserTransfersError";
import { InternalServerError as ListUserTransfersInternalServerError } from "./types/ListUserTransfers/ListUserTransfersError";
import { BadGatewayError as ListUserTransfersBadGatewayError } from "./types/ListUserTransfers/ListUserTransfersError";
import { GatewayTimeoutError as ListUserTransfersGatewayTimeoutError } from "./types/ListUserTransfers/ListUserTransfersError";
import { InvalidParameterError as LockTransferInvalidParameterError } from "./types/LockTransfer/LockTransferError";
import { UnauthorizedError as LockTransferUnauthorizedError } from "./types/LockTransfer/LockTransferError";
import { TransferAlreadyLockedError as LockTransferTransferAlreadyLockedError } from "./types/LockTransfer/LockTransferError";
import { TransferIsDirtyError as LockTransferTransferIsDirtyError } from "./types/LockTransfer/LockTransferError";
import { TransferIsInQueueError as LockTransferTransferIsInQueueError } from "./types/LockTransfer/LockTransferError";
import { NotFoundError as LockTransferNotFoundError } from "./types/LockTransfer/LockTransferError";
import { InternalServerError as LockTransferInternalServerError } from "./types/LockTransfer/LockTransferError";
import { BadGatewayError as LockTransferBadGatewayError } from "./types/LockTransfer/LockTransferError";
import { GatewayTimeoutError as LockTransferGatewayTimeoutError } from "./types/LockTransfer/LockTransferError";
import { InvalidParameterError as UpdateTransferInvalidParameterError } from "./types/UpdateTransfer/UpdateTransferError";
import { UnauthorizedError as UpdateTransferUnauthorizedError } from "./types/UpdateTransfer/UpdateTransferError";
import { TransferAlreadyLockedError as UpdateTransferTransferAlreadyLockedError } from "./types/UpdateTransfer/UpdateTransferError";
import { NotFoundError as UpdateTransferNotFoundError } from "./types/UpdateTransfer/UpdateTransferError";
import { InternalServerError as UpdateTransferInternalServerError } from "./types/UpdateTransfer/UpdateTransferError";
import { BadGatewayError as UpdateTransferBadGatewayError } from "./types/UpdateTransfer/UpdateTransferError";
import { GatewayTimeoutError as UpdateTransferGatewayTimeoutError } from "./types/UpdateTransfer/UpdateTransferError";
import { InvalidParameterError as UpdateTransferCustomizationInvalidParameterError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { UnauthorizedError as UpdateTransferCustomizationUnauthorizedError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { NotFoundError as UpdateTransferCustomizationNotFoundError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { InternalServerError as UpdateTransferCustomizationInternalServerError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { BadGatewayError as UpdateTransferCustomizationBadGatewayError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { GatewayTimeoutError as UpdateTransferCustomizationGatewayTimeoutError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { InvalidParameterError as UpdateTransferFileInvalidParameterError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { UnauthorizedError as UpdateTransferFileUnauthorizedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { TransferAlreadyLockedError as UpdateTransferFileTransferAlreadyLockedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { FileAlreadyLockedError as UpdateTransferFileFileAlreadyLockedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { NotFoundError as UpdateTransferFileNotFoundError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { InternalServerError as UpdateTransferFileInternalServerError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { BadGatewayError as UpdateTransferFileBadGatewayError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { GatewayTimeoutError as UpdateTransferFileGatewayTimeoutError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { InvalidParameterError as UpdateTransferFilePartInvalidParameterError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { UnauthorizedError as UpdateTransferFilePartUnauthorizedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { TransferAlreadyLockedError as UpdateTransferFilePartTransferAlreadyLockedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { FileAlreadyLockedError as UpdateTransferFilePartFileAlreadyLockedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { NotFoundError as UpdateTransferFilePartNotFoundError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { InternalServerError as UpdateTransferFilePartInternalServerError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { BadGatewayError as UpdateTransferFilePartBadGatewayError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { GatewayTimeoutError as UpdateTransferFilePartGatewayTimeoutError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { InvalidParameterError as UpdateTransferFilePartsInvalidParameterError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { UnauthorizedError as UpdateTransferFilePartsUnauthorizedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { TransferAlreadyLockedError as UpdateTransferFilePartsTransferAlreadyLockedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { FileAlreadyLockedError as UpdateTransferFilePartsFileAlreadyLockedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { NotFoundError as UpdateTransferFilePartsNotFoundError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { InternalServerError as UpdateTransferFilePartsInternalServerError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { BadGatewayError as UpdateTransferFilePartsBadGatewayError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { GatewayTimeoutError as UpdateTransferFilePartsGatewayTimeoutError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { MissingSenderError as CreateTeamTransferMissingSenderError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { MissingReceiversError as CreateTeamTransferMissingReceiversError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InvalidDeliveryError as CreateTeamTransferInvalidDeliveryError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InvalidAvailabilityDurationError as CreateTeamTransferInvalidAvailabilityDurationError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InvalidParameterError as CreateTeamTransferInvalidParameterError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { UnauthorizedError as CreateTeamTransferUnauthorizedError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InvalidSubscriptionError as CreateTeamTransferInvalidSubscriptionError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { EmailNotAllowedError as CreateTeamTransferEmailNotAllowedError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { UsageExceededError as CreateTeamTransferUsageExceededError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { PasswordRequiredError as CreateTeamTransferPasswordRequiredError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { CustomUrlAlreadyInUseError as CreateTeamTransferCustomUrlAlreadyInUseError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InternalServerError as CreateTeamTransferInternalServerError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { BadGatewayError as CreateTeamTransferBadGatewayError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { GatewayTimeoutError as CreateTeamTransferGatewayTimeoutError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { MissingSenderError as CreateTransferMissingSenderError } from "./types/CreateTransfer/CreateTransferError";
import { MissingReceiversError as CreateTransferMissingReceiversError } from "./types/CreateTransfer/CreateTransferError";
import { InvalidDeliveryError as CreateTransferInvalidDeliveryError } from "./types/CreateTransfer/CreateTransferError";
import { InvalidAvailabilityDurationError as CreateTransferInvalidAvailabilityDurationError } from "./types/CreateTransfer/CreateTransferError";
import { InvalidParameterError as CreateTransferInvalidParameterError } from "./types/CreateTransfer/CreateTransferError";
import { UnauthorizedError as CreateTransferUnauthorizedError } from "./types/CreateTransfer/CreateTransferError";
import { InvalidSubscriptionError as CreateTransferInvalidSubscriptionError } from "./types/CreateTransfer/CreateTransferError";
import { EmailNotAllowedError as CreateTransferEmailNotAllowedError } from "./types/CreateTransfer/CreateTransferError";
import { UsageExceededError as CreateTransferUsageExceededError } from "./types/CreateTransfer/CreateTransferError";
import { PasswordRequiredError as CreateTransferPasswordRequiredError } from "./types/CreateTransfer/CreateTransferError";
import { CustomUrlAlreadyInUseError as CreateTransferCustomUrlAlreadyInUseError } from "./types/CreateTransfer/CreateTransferError";
import { InternalServerError as CreateTransferInternalServerError } from "./types/CreateTransfer/CreateTransferError";
import { BadGatewayError as CreateTransferBadGatewayError } from "./types/CreateTransfer/CreateTransferError";
import { GatewayTimeoutError as CreateTransferGatewayTimeoutError } from "./types/CreateTransfer/CreateTransferError";
import { InvalidParameterError as CreateTransferFileInvalidParameterError } from "./types/CreateTransferFile/CreateTransferFileError";
import { UnauthorizedError as CreateTransferFileUnauthorizedError } from "./types/CreateTransferFile/CreateTransferFileError";
import { TransferAlreadyLockedError as CreateTransferFileTransferAlreadyLockedError } from "./types/CreateTransferFile/CreateTransferFileError";
import { TransferIsInQueueError as CreateTransferFileTransferIsInQueueError } from "./types/CreateTransferFile/CreateTransferFileError";
import { NotFoundError as CreateTransferFileNotFoundError } from "./types/CreateTransferFile/CreateTransferFileError";
import { ConflictError as CreateTransferFileConflictError } from "./types/CreateTransferFile/CreateTransferFileError";
import { InternalServerError as CreateTransferFileInternalServerError } from "./types/CreateTransferFile/CreateTransferFileError";
import { BadGatewayError as CreateTransferFileBadGatewayError } from "./types/CreateTransferFile/CreateTransferFileError";
import { GatewayTimeoutError as CreateTransferFileGatewayTimeoutError } from "./types/CreateTransferFile/CreateTransferFileError";
import { InvalidParameterError as CreateTransferFilePartInvalidParameterError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { UnauthorizedError as CreateTransferFilePartUnauthorizedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { TransferAlreadyLockedError as CreateTransferFilePartTransferAlreadyLockedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { FileAlreadyLockedError as CreateTransferFilePartFileAlreadyLockedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { NotFoundError as CreateTransferFilePartNotFoundError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { InternalServerError as CreateTransferFilePartInternalServerError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { BadGatewayError as CreateTransferFilePartBadGatewayError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { GatewayTimeoutError as CreateTransferFilePartGatewayTimeoutError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { InvalidParameterError as CreateTransferFilePartsInvalidParameterError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { UnauthorizedError as CreateTransferFilePartsUnauthorizedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { TransferAlreadyLockedError as CreateTransferFilePartsTransferAlreadyLockedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { FileAlreadyLockedError as CreateTransferFilePartsFileAlreadyLockedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { NotFoundError as CreateTransferFilePartsNotFoundError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { InternalServerError as CreateTransferFilePartsInternalServerError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { BadGatewayError as CreateTransferFilePartsBadGatewayError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { GatewayTimeoutError as CreateTransferFilePartsGatewayTimeoutError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { InvalidParameterError as CreateTransferSignedUrlsInvalidParameterError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { UnauthorizedError as CreateTransferSignedUrlsUnauthorizedError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { PasswordDoesNotMatchError as CreateTransferSignedUrlsPasswordDoesNotMatchError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { NotFoundError as CreateTransferSignedUrlsNotFoundError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { InternalServerError as CreateTransferSignedUrlsInternalServerError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { BadGatewayError as CreateTransferSignedUrlsBadGatewayError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { GatewayTimeoutError as CreateTransferSignedUrlsGatewayTimeoutError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { InvalidParameterError as DeleteReportInvalidParameterError } from "./types/DeleteReport/DeleteReportError";
import { UnauthorizedError as DeleteReportUnauthorizedError } from "./types/DeleteReport/DeleteReportError";
import { TransferNotUploadedError as DeleteReportTransferNotUploadedError } from "./types/DeleteReport/DeleteReportError";
import { NotFoundError as DeleteReportNotFoundError } from "./types/DeleteReport/DeleteReportError";
import { InternalServerError as DeleteReportInternalServerError } from "./types/DeleteReport/DeleteReportError";
import { BadGatewayError as DeleteReportBadGatewayError } from "./types/DeleteReport/DeleteReportError";
import { GatewayTimeoutError as DeleteReportGatewayTimeoutError } from "./types/DeleteReport/DeleteReportError";
import { InvalidParameterError as DeleteTeamTransferInvalidParameterError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { UnauthorizedError as DeleteTeamTransferUnauthorizedError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { TransferNotUploadedError as DeleteTeamTransferTransferNotUploadedError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { NotFoundError as DeleteTeamTransferNotFoundError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { InternalServerError as DeleteTeamTransferInternalServerError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { BadGatewayError as DeleteTeamTransferBadGatewayError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { GatewayTimeoutError as DeleteTeamTransferGatewayTimeoutError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { InvalidParameterError as DeleteTransferInvalidParameterError } from "./types/DeleteTransfer/DeleteTransferError";
import { UnauthorizedError as DeleteTransferUnauthorizedError } from "./types/DeleteTransfer/DeleteTransferError";
import { TransferNotUploadedError as DeleteTransferTransferNotUploadedError } from "./types/DeleteTransfer/DeleteTransferError";
import { NotFoundError as DeleteTransferNotFoundError } from "./types/DeleteTransfer/DeleteTransferError";
import { InternalServerError as DeleteTransferInternalServerError } from "./types/DeleteTransfer/DeleteTransferError";
import { BadGatewayError as DeleteTransferBadGatewayError } from "./types/DeleteTransfer/DeleteTransferError";
import { GatewayTimeoutError as DeleteTransferGatewayTimeoutError } from "./types/DeleteTransfer/DeleteTransferError";
import { InvalidParameterError as DeleteTransferFileInvalidParameterError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { UnauthorizedError as DeleteTransferFileUnauthorizedError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { NotFoundError as DeleteTransferFileNotFoundError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { InternalServerError as DeleteTransferFileInternalServerError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { BadGatewayError as DeleteTransferFileBadGatewayError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { GatewayTimeoutError as DeleteTransferFileGatewayTimeoutError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { InvalidParameterError as DeleteUserTransferInvalidParameterError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { UnauthorizedError as DeleteUserTransferUnauthorizedError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { TransferNotUploadedError as DeleteUserTransferTransferNotUploadedError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { NotFoundError as DeleteUserTransferNotFoundError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { InternalServerError as DeleteUserTransferInternalServerError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { BadGatewayError as DeleteUserTransferBadGatewayError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { GatewayTimeoutError as DeleteUserTransferGatewayTimeoutError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { InvalidParameterError as GetMetricStatisticInvalidParameterError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { UnauthorizedError as GetMetricStatisticUnauthorizedError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { InternalServerError as GetMetricStatisticInternalServerError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { BadGatewayError as GetMetricStatisticBadGatewayError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { GatewayTimeoutError as GetMetricStatisticGatewayTimeoutError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { InvalidParameterError as GetReportInvalidParameterError } from "./types/GetReport/GetReportError";
import { UnauthorizedError as GetReportUnauthorizedError } from "./types/GetReport/GetReportError";
import { NotFoundError as GetReportNotFoundError } from "./types/GetReport/GetReportError";
import { InternalServerError as GetReportInternalServerError } from "./types/GetReport/GetReportError";
import { BadGatewayError as GetReportBadGatewayError } from "./types/GetReport/GetReportError";
import { GatewayTimeoutError as GetReportGatewayTimeoutError } from "./types/GetReport/GetReportError";
import { InvalidParameterError as GetTeamMetricStatisticInvalidParameterError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { UnauthorizedError as GetTeamMetricStatisticUnauthorizedError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { InternalServerError as GetTeamMetricStatisticInternalServerError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { BadGatewayError as GetTeamMetricStatisticBadGatewayError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { GatewayTimeoutError as GetTeamMetricStatisticGatewayTimeoutError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { InvalidParameterError as GetTeamTransferInvalidParameterError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { UnauthorizedError as GetTeamTransferUnauthorizedError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { NotFoundError as GetTeamTransferNotFoundError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { InternalServerError as GetTeamTransferInternalServerError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { BadGatewayError as GetTeamTransferBadGatewayError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { GatewayTimeoutError as GetTeamTransferGatewayTimeoutError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { InvalidParameterError as GetTeamTransferFileInvalidParameterError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { UnauthorizedError as GetTeamTransferFileUnauthorizedError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { ForbiddenError as GetTeamTransferFileForbiddenError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { NotFoundError as GetTeamTransferFileNotFoundError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { InternalServerError as GetTeamTransferFileInternalServerError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { BadGatewayError as GetTeamTransferFileBadGatewayError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { GatewayTimeoutError as GetTeamTransferFileGatewayTimeoutError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { InvalidParameterError as GetTeamTransferQueueInvalidParameterError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { UnauthorizedError as GetTeamTransferQueueUnauthorizedError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { NotFoundError as GetTeamTransferQueueNotFoundError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { InternalServerError as GetTeamTransferQueueInternalServerError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { BadGatewayError as GetTeamTransferQueueBadGatewayError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { GatewayTimeoutError as GetTeamTransferQueueGatewayTimeoutError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { InvalidParameterError as GetTeamUsageInvalidParameterError } from "./types/GetTeamUsage/GetTeamUsageError";
import { UnauthorizedError as GetTeamUsageUnauthorizedError } from "./types/GetTeamUsage/GetTeamUsageError";
import { InternalServerError as GetTeamUsageInternalServerError } from "./types/GetTeamUsage/GetTeamUsageError";
import { BadGatewayError as GetTeamUsageBadGatewayError } from "./types/GetTeamUsage/GetTeamUsageError";
import { GatewayTimeoutError as GetTeamUsageGatewayTimeoutError } from "./types/GetTeamUsage/GetTeamUsageError";
import { InvalidParameterError as GetTeamUserMetricStatisticInvalidParameterError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { UnauthorizedError as GetTeamUserMetricStatisticUnauthorizedError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { InternalServerError as GetTeamUserMetricStatisticInternalServerError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { BadGatewayError as GetTeamUserMetricStatisticBadGatewayError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { GatewayTimeoutError as GetTeamUserMetricStatisticGatewayTimeoutError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { InvalidParameterError as GetTeamUserUsageInvalidParameterError } from "./types/GetTeamUserUsage/GetTeamUserUsageError";
import { UnauthorizedError as GetTeamUserUsageUnauthorizedError } from "./types/GetTeamUserUsage/GetTeamUserUsageError";
import { InternalServerError as GetTeamUserUsageInternalServerError } from "./types/GetTeamUserUsage/GetTeamUserUsageError";
import { BadGatewayError as GetTeamUserUsageBadGatewayError } from "./types/GetTeamUserUsage/GetTeamUserUsageError";
import { GatewayTimeoutError as GetTeamUserUsageGatewayTimeoutError } from "./types/GetTeamUserUsage/GetTeamUserUsageError";
import { InvalidParameterError as GetTransferInvalidParameterError } from "./types/GetTransfer/GetTransferError";
import { UnauthorizedError as GetTransferUnauthorizedError } from "./types/GetTransfer/GetTransferError";
import { NotFoundError as GetTransferNotFoundError } from "./types/GetTransfer/GetTransferError";
import { InternalServerError as GetTransferInternalServerError } from "./types/GetTransfer/GetTransferError";
import { BadGatewayError as GetTransferBadGatewayError } from "./types/GetTransfer/GetTransferError";
import { GatewayTimeoutError as GetTransferGatewayTimeoutError } from "./types/GetTransfer/GetTransferError";
import { InvalidParameterError as GetTransferFileInvalidParameterError } from "./types/GetTransferFile/GetTransferFileError";
import { UnauthorizedError as GetTransferFileUnauthorizedError } from "./types/GetTransferFile/GetTransferFileError";
import { NotFoundError as GetTransferFileNotFoundError } from "./types/GetTransferFile/GetTransferFileError";
import { InternalServerError as GetTransferFileInternalServerError } from "./types/GetTransferFile/GetTransferFileError";
import { BadGatewayError as GetTransferFileBadGatewayError } from "./types/GetTransferFile/GetTransferFileError";
import { GatewayTimeoutError as GetTransferFileGatewayTimeoutError } from "./types/GetTransferFile/GetTransferFileError";
import { InvalidParameterError as GetTransferFilePreviewInvalidParameterError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { UnauthorizedError as GetTransferFilePreviewUnauthorizedError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { PasswordDoesNotMatchError as GetTransferFilePreviewPasswordDoesNotMatchError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { NotFoundError as GetTransferFilePreviewNotFoundError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { InternalServerError as GetTransferFilePreviewInternalServerError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { BadGatewayError as GetTransferFilePreviewBadGatewayError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { GatewayTimeoutError as GetTransferFilePreviewGatewayTimeoutError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { InvalidParameterError as GetTransferPreviewInvalidParameterError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { UnauthorizedError as GetTransferPreviewUnauthorizedError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { PasswordDoesNotMatchError as GetTransferPreviewPasswordDoesNotMatchError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { InvalidEmailError as GetTransferPreviewInvalidEmailError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { OwnerUsageExceededError as GetTransferPreviewOwnerUsageExceededError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { AccessorUsageExceededError as GetTransferPreviewAccessorUsageExceededError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { NotFoundError as GetTransferPreviewNotFoundError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { InternalServerError as GetTransferPreviewInternalServerError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { BadGatewayError as GetTransferPreviewBadGatewayError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { GatewayTimeoutError as GetTransferPreviewGatewayTimeoutError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { InvalidParameterError as GetTransferQueueInvalidParameterError } from "./types/GetTransferQueue/GetTransferQueueError";
import { UnauthorizedError as GetTransferQueueUnauthorizedError } from "./types/GetTransferQueue/GetTransferQueueError";
import { NotFoundError as GetTransferQueueNotFoundError } from "./types/GetTransferQueue/GetTransferQueueError";
import { InternalServerError as GetTransferQueueInternalServerError } from "./types/GetTransferQueue/GetTransferQueueError";
import { BadGatewayError as GetTransferQueueBadGatewayError } from "./types/GetTransferQueue/GetTransferQueueError";
import { GatewayTimeoutError as GetTransferQueueGatewayTimeoutError } from "./types/GetTransferQueue/GetTransferQueueError";
import { UnauthorizedError as GetUsageUnauthorizedError } from "./types/GetUsage/GetUsageError";
import { InternalServerError as GetUsageInternalServerError } from "./types/GetUsage/GetUsageError";
import { BadGatewayError as GetUsageBadGatewayError } from "./types/GetUsage/GetUsageError";
import { GatewayTimeoutError as GetUsageGatewayTimeoutError } from "./types/GetUsage/GetUsageError";
import { InvalidParameterError as GetUserMetricStatisticInvalidParameterError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { UnauthorizedError as GetUserMetricStatisticUnauthorizedError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { InternalServerError as GetUserMetricStatisticInternalServerError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { BadGatewayError as GetUserMetricStatisticBadGatewayError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { GatewayTimeoutError as GetUserMetricStatisticGatewayTimeoutError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { InvalidParameterError as GetUserTransferInvalidParameterError } from "./types/GetUserTransfer/GetUserTransferError";
import { UnauthorizedError as GetUserTransferUnauthorizedError } from "./types/GetUserTransfer/GetUserTransferError";
import { NotFoundError as GetUserTransferNotFoundError } from "./types/GetUserTransfer/GetUserTransferError";
import { InternalServerError as GetUserTransferInternalServerError } from "./types/GetUserTransfer/GetUserTransferError";
import { BadGatewayError as GetUserTransferBadGatewayError } from "./types/GetUserTransfer/GetUserTransferError";
import { GatewayTimeoutError as GetUserTransferGatewayTimeoutError } from "./types/GetUserTransfer/GetUserTransferError";
import { InvalidParameterError as GetUserTransferFileInvalidParameterError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { UnauthorizedError as GetUserTransferFileUnauthorizedError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { NotFoundError as GetUserTransferFileNotFoundError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { InternalServerError as GetUserTransferFileInternalServerError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { BadGatewayError as GetUserTransferFileBadGatewayError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { GatewayTimeoutError as GetUserTransferFileGatewayTimeoutError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { InvalidParameterError as GetUserUsageInvalidParameterError } from "./types/GetUserUsage/GetUserUsageError";
import { UnauthorizedError as GetUserUsageUnauthorizedError } from "./types/GetUserUsage/GetUserUsageError";
import { InternalServerError as GetUserUsageInternalServerError } from "./types/GetUserUsage/GetUserUsageError";
import { BadGatewayError as GetUserUsageBadGatewayError } from "./types/GetUserUsage/GetUserUsageError";
import { GatewayTimeoutError as GetUserUsageGatewayTimeoutError } from "./types/GetUserUsage/GetUserUsageError";
import { BadRequestError as DownloadBadRequestError } from "./types/Download/DownloadError";
import { UnauthorizedError as DownloadUnauthorizedError } from "./types/Download/DownloadError";
import { FobiddenError as DownloadFobiddenError } from "./types/Download/DownloadError";
import { NotFoundError as DownloadNotFoundError } from "./types/Download/DownloadError";
import { InternalServerError as DownloadInternalServerError } from "./types/Download/DownloadError";
import { BadGatewayError as DownloadBadGatewayError } from "./types/Download/DownloadError";
import { GatewayTimeoutError as DownloadGatewayTimeoutError } from "./types/Download/DownloadError";
import { BadRequestError as UploadTransferFilePartBadRequestError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InternalServerError as UploadTransferFilePartInternalServerError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NotFoundError as UploadTransferFilePartNotFoundError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NoSuchUploadError as UploadTransferFilePartNoSuchUploadError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AccessControlListNotSupportedError as UploadTransferFilePartAccessControlListNotSupportedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AccessDeniedError as UploadTransferFilePartAccessDeniedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AccessPointAlreadyOwnedByYouError as UploadTransferFilePartAccessPointAlreadyOwnedByYouError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AccountProblemError as UploadTransferFilePartAccountProblemError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AllAccessDisabledError as UploadTransferFilePartAllAccessDisabledError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AmbiguousGrantByEmailAddressError as UploadTransferFilePartAmbiguousGrantByEmailAddressError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { AuthorizationHeaderMalformedError as UploadTransferFilePartAuthorizationHeaderMalformedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { BadDigestError as UploadTransferFilePartBadDigestError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { EntityTooSmallError as UploadTransferFilePartEntityTooSmallError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { EntityTooLargeError as UploadTransferFilePartEntityTooLargeError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { ExpiredTokenError as UploadTransferFilePartExpiredTokenError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { IllegalLocationConstraintExceptionError as UploadTransferFilePartIllegalLocationConstraintExceptionError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { IllegalVersioningConfigurationExceptionError as UploadTransferFilePartIllegalVersioningConfigurationExceptionError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { IncompleteBodyError as UploadTransferFilePartIncompleteBodyError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InlineDataTooLargeError as UploadTransferFilePartInlineDataTooLargeError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InternalError as UploadTransferFilePartInternalError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidAccessKeyIdError as UploadTransferFilePartInvalidAccessKeyIdError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidArgumentError as UploadTransferFilePartInvalidArgumentError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidBucketNameError as UploadTransferFilePartInvalidBucketNameError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidBucketStateError as UploadTransferFilePartInvalidBucketStateError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidDigestError as UploadTransferFilePartInvalidDigestError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidLocationConstraintError as UploadTransferFilePartInvalidLocationConstraintError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidObjectStateError as UploadTransferFilePartInvalidObjectStateError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidPartError as UploadTransferFilePartInvalidPartError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidPartOrderError as UploadTransferFilePartInvalidPartOrderError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidPayerError as UploadTransferFilePartInvalidPayerError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidPolicyDocumentError as UploadTransferFilePartInvalidPolicyDocumentError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidRangeError as UploadTransferFilePartInvalidRangeError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidRequestError as UploadTransferFilePartInvalidRequestError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidSecurityError as UploadTransferFilePartInvalidSecurityError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidTokenError as UploadTransferFilePartInvalidTokenError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { InvalidURIError as UploadTransferFilePartInvalidURIError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { KeyTooLongError as UploadTransferFilePartKeyTooLongError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { MaxMessageLengthExceededError as UploadTransferFilePartMaxMessageLengthExceededError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { MetadataTooLargeError as UploadTransferFilePartMetadataTooLargeError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { MissingContentLengthError as UploadTransferFilePartMissingContentLengthError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { MissingRequestBodyError as UploadTransferFilePartMissingRequestBodyError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { MissingSecurityHeaderError as UploadTransferFilePartMissingSecurityHeaderError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NoSuchBucketError as UploadTransferFilePartNoSuchBucketError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NoSuchBucketPolicyError as UploadTransferFilePartNoSuchBucketPolicyError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NoSuchCORSConfigurationError as UploadTransferFilePartNoSuchCORSConfigurationError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NoSuchKeyError as UploadTransferFilePartNoSuchKeyError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { NotImplementedError as UploadTransferFilePartNotImplementedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { RequestHeaderSectionTooLargeError as UploadTransferFilePartRequestHeaderSectionTooLargeError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { RequestTimeoutError as UploadTransferFilePartRequestTimeoutError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { RequestTimeTooSkewedError as UploadTransferFilePartRequestTimeTooSkewedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { ServerSideEncryptionConfigurationNotFoundError as UploadTransferFilePartServerSideEncryptionConfigurationNotFoundError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { ServiceUnavailableError as UploadTransferFilePartServiceUnavailableError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { SignatureDoesNotMatchError as UploadTransferFilePartSignatureDoesNotMatchError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { SlowDownError as UploadTransferFilePartSlowDownError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { TokenRefreshRequiredError as UploadTransferFilePartTokenRefreshRequiredError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { UnexpectedContentError as UploadTransferFilePartUnexpectedContentError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";
import { UserKeyMustBeSpecifiedError as UploadTransferFilePartUserKeyMustBeSpecifiedError } from "./types/UploadTransferFilePart/UploadTransferFilePartError";

export const errors = {
    ListTeamTransferEventsError: {
        InvalidParameterError: ListTeamTransferEventsInvalidParameterError,
        UnauthorizedError: ListTeamTransferEventsUnauthorizedError,
        NotFoundError: ListTeamTransferEventsNotFoundError,
        InternalServerError: ListTeamTransferEventsInternalServerError,
        BadGatewayError: ListTeamTransferEventsBadGatewayError,
        GatewayTimeoutError: ListTeamTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamTransferFilesError: {
        InvalidParameterError: ListTeamTransferFilesInvalidParameterError,
        UnauthorizedError: ListTeamTransferFilesUnauthorizedError,
        ForbiddenError: ListTeamTransferFilesForbiddenError,
        NotFoundError: ListTeamTransferFilesNotFoundError,
        InternalServerError: ListTeamTransferFilesInternalServerError,
        BadGatewayError: ListTeamTransferFilesBadGatewayError,
        GatewayTimeoutError: ListTeamTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamTransfersError: {
        InvalidParameterError: ListTeamTransfersInvalidParameterError,
        UnauthorizedError: ListTeamTransfersUnauthorizedError,
        ForbiddenError: ListTeamTransfersForbiddenError,
        NotFoundError: ListTeamTransfersNotFoundError,
        InternalServerError: ListTeamTransfersInternalServerError,
        BadGatewayError: ListTeamTransfersBadGatewayError,
        GatewayTimeoutError: ListTeamTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserTransfersError: {
        InvalidParameterError: ListTeamUserTransfersInvalidParameterError,
        UnauthorizedError: ListTeamUserTransfersUnauthorizedError,
        InternalServerError: ListTeamUserTransfersInternalServerError,
        BadGatewayError: ListTeamUserTransfersBadGatewayError,
        GatewayTimeoutError: ListTeamUserTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferEventsError: {
        InvalidParameterError: ListTransferEventsInvalidParameterError,
        UnauthorizedError: ListTransferEventsUnauthorizedError,
        NotFoundError: ListTransferEventsNotFoundError,
        InternalServerError: ListTransferEventsInternalServerError,
        BadGatewayError: ListTransferEventsBadGatewayError,
        GatewayTimeoutError: ListTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferFilesError: {
        InvalidParameterError: ListTransferFilesInvalidParameterError,
        UnauthorizedError: ListTransferFilesUnauthorizedError,
        NotFoundError: ListTransferFilesNotFoundError,
        InternalServerError: ListTransferFilesInternalServerError,
        BadGatewayError: ListTransferFilesBadGatewayError,
        GatewayTimeoutError: ListTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferFilesPreviewError: {
        InvalidParameterError: ListTransferFilesPreviewInvalidParameterError,
        UnauthorizedError: ListTransferFilesPreviewUnauthorizedError,
        PasswordDoesNotMatchError: ListTransferFilesPreviewPasswordDoesNotMatchError,
        OwnerUsageExceededError: ListTransferFilesPreviewOwnerUsageExceededError,
        AccessorUsageExceededError: ListTransferFilesPreviewAccessorUsageExceededError,
        NotFoundError: ListTransferFilesPreviewNotFoundError,
        InternalServerError: ListTransferFilesPreviewInternalServerError,
        BadGatewayError: ListTransferFilesPreviewBadGatewayError,
        GatewayTimeoutError: ListTransferFilesPreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransfersError: {
        UnauthorizedError: ListTransfersUnauthorizedError,
        NotFoundError: ListTransfersNotFoundError,
        InternalServerError: ListTransfersInternalServerError,
        BadGatewayError: ListTransfersBadGatewayError,
        GatewayTimeoutError: ListTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransferEventsError: {
        InvalidParameterError: ListUserTransferEventsInvalidParameterError,
        UnauthorizedError: ListUserTransferEventsUnauthorizedError,
        NotFoundError: ListUserTransferEventsNotFoundError,
        InternalServerError: ListUserTransferEventsInternalServerError,
        BadGatewayError: ListUserTransferEventsBadGatewayError,
        GatewayTimeoutError: ListUserTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransferFilesError: {
        InvalidParameterError: ListUserTransferFilesInvalidParameterError,
        UnauthorizedError: ListUserTransferFilesUnauthorizedError,
        NotFoundError: ListUserTransferFilesNotFoundError,
        InternalServerError: ListUserTransferFilesInternalServerError,
        BadGatewayError: ListUserTransferFilesBadGatewayError,
        GatewayTimeoutError: ListUserTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransfersError: {
        InvalidParameterError: ListUserTransfersInvalidParameterError,
        UnauthorizedError: ListUserTransfersUnauthorizedError,
        NotFoundError: ListUserTransfersNotFoundError,
        InternalServerError: ListUserTransfersInternalServerError,
        BadGatewayError: ListUserTransfersBadGatewayError,
        GatewayTimeoutError: ListUserTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    LockTransferError: {
        InvalidParameterError: LockTransferInvalidParameterError,
        UnauthorizedError: LockTransferUnauthorizedError,
        TransferAlreadyLockedError: LockTransferTransferAlreadyLockedError,
        TransferIsDirtyError: LockTransferTransferIsDirtyError,
        TransferIsInQueueError: LockTransferTransferIsInQueueError,
        NotFoundError: LockTransferNotFoundError,
        InternalServerError: LockTransferInternalServerError,
        BadGatewayError: LockTransferBadGatewayError,
        GatewayTimeoutError: LockTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferError: {
        InvalidParameterError: UpdateTransferInvalidParameterError,
        UnauthorizedError: UpdateTransferUnauthorizedError,
        TransferAlreadyLockedError: UpdateTransferTransferAlreadyLockedError,
        NotFoundError: UpdateTransferNotFoundError,
        InternalServerError: UpdateTransferInternalServerError,
        BadGatewayError: UpdateTransferBadGatewayError,
        GatewayTimeoutError: UpdateTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferCustomizationError: {
        InvalidParameterError: UpdateTransferCustomizationInvalidParameterError,
        UnauthorizedError: UpdateTransferCustomizationUnauthorizedError,
        NotFoundError: UpdateTransferCustomizationNotFoundError,
        InternalServerError: UpdateTransferCustomizationInternalServerError,
        BadGatewayError: UpdateTransferCustomizationBadGatewayError,
        GatewayTimeoutError: UpdateTransferCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFileError: {
        InvalidParameterError: UpdateTransferFileInvalidParameterError,
        UnauthorizedError: UpdateTransferFileUnauthorizedError,
        TransferAlreadyLockedError: UpdateTransferFileTransferAlreadyLockedError,
        FileAlreadyLockedError: UpdateTransferFileFileAlreadyLockedError,
        NotFoundError: UpdateTransferFileNotFoundError,
        InternalServerError: UpdateTransferFileInternalServerError,
        BadGatewayError: UpdateTransferFileBadGatewayError,
        GatewayTimeoutError: UpdateTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFilePartError: {
        InvalidParameterError: UpdateTransferFilePartInvalidParameterError,
        UnauthorizedError: UpdateTransferFilePartUnauthorizedError,
        TransferAlreadyLockedError: UpdateTransferFilePartTransferAlreadyLockedError,
        FileAlreadyLockedError: UpdateTransferFilePartFileAlreadyLockedError,
        NotFoundError: UpdateTransferFilePartNotFoundError,
        InternalServerError: UpdateTransferFilePartInternalServerError,
        BadGatewayError: UpdateTransferFilePartBadGatewayError,
        GatewayTimeoutError: UpdateTransferFilePartGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFilePartsError: {
        InvalidParameterError: UpdateTransferFilePartsInvalidParameterError,
        UnauthorizedError: UpdateTransferFilePartsUnauthorizedError,
        TransferAlreadyLockedError: UpdateTransferFilePartsTransferAlreadyLockedError,
        FileAlreadyLockedError: UpdateTransferFilePartsFileAlreadyLockedError,
        NotFoundError: UpdateTransferFilePartsNotFoundError,
        InternalServerError: UpdateTransferFilePartsInternalServerError,
        BadGatewayError: UpdateTransferFilePartsBadGatewayError,
        GatewayTimeoutError: UpdateTransferFilePartsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTeamTransferError: {
        MissingSenderError: CreateTeamTransferMissingSenderError,
        MissingReceiversError: CreateTeamTransferMissingReceiversError,
        InvalidDeliveryError: CreateTeamTransferInvalidDeliveryError,
        InvalidAvailabilityDurationError: CreateTeamTransferInvalidAvailabilityDurationError,
        InvalidParameterError: CreateTeamTransferInvalidParameterError,
        UnauthorizedError: CreateTeamTransferUnauthorizedError,
        InvalidSubscriptionError: CreateTeamTransferInvalidSubscriptionError,
        EmailNotAllowedError: CreateTeamTransferEmailNotAllowedError,
        UsageExceededError: CreateTeamTransferUsageExceededError,
        PasswordRequiredError: CreateTeamTransferPasswordRequiredError,
        CustomUrlAlreadyInUseError: CreateTeamTransferCustomUrlAlreadyInUseError,
        InternalServerError: CreateTeamTransferInternalServerError,
        BadGatewayError: CreateTeamTransferBadGatewayError,
        GatewayTimeoutError: CreateTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferError: {
        MissingSenderError: CreateTransferMissingSenderError,
        MissingReceiversError: CreateTransferMissingReceiversError,
        InvalidDeliveryError: CreateTransferInvalidDeliveryError,
        InvalidAvailabilityDurationError: CreateTransferInvalidAvailabilityDurationError,
        InvalidParameterError: CreateTransferInvalidParameterError,
        UnauthorizedError: CreateTransferUnauthorizedError,
        InvalidSubscriptionError: CreateTransferInvalidSubscriptionError,
        EmailNotAllowedError: CreateTransferEmailNotAllowedError,
        UsageExceededError: CreateTransferUsageExceededError,
        PasswordRequiredError: CreateTransferPasswordRequiredError,
        CustomUrlAlreadyInUseError: CreateTransferCustomUrlAlreadyInUseError,
        InternalServerError: CreateTransferInternalServerError,
        BadGatewayError: CreateTransferBadGatewayError,
        GatewayTimeoutError: CreateTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFileError: {
        InvalidParameterError: CreateTransferFileInvalidParameterError,
        UnauthorizedError: CreateTransferFileUnauthorizedError,
        TransferAlreadyLockedError: CreateTransferFileTransferAlreadyLockedError,
        TransferIsInQueueError: CreateTransferFileTransferIsInQueueError,
        NotFoundError: CreateTransferFileNotFoundError,
        ConflictError: CreateTransferFileConflictError,
        InternalServerError: CreateTransferFileInternalServerError,
        BadGatewayError: CreateTransferFileBadGatewayError,
        GatewayTimeoutError: CreateTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFilePartError: {
        InvalidParameterError: CreateTransferFilePartInvalidParameterError,
        UnauthorizedError: CreateTransferFilePartUnauthorizedError,
        TransferAlreadyLockedError: CreateTransferFilePartTransferAlreadyLockedError,
        FileAlreadyLockedError: CreateTransferFilePartFileAlreadyLockedError,
        NotFoundError: CreateTransferFilePartNotFoundError,
        InternalServerError: CreateTransferFilePartInternalServerError,
        BadGatewayError: CreateTransferFilePartBadGatewayError,
        GatewayTimeoutError: CreateTransferFilePartGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFilePartsError: {
        InvalidParameterError: CreateTransferFilePartsInvalidParameterError,
        UnauthorizedError: CreateTransferFilePartsUnauthorizedError,
        TransferAlreadyLockedError: CreateTransferFilePartsTransferAlreadyLockedError,
        FileAlreadyLockedError: CreateTransferFilePartsFileAlreadyLockedError,
        NotFoundError: CreateTransferFilePartsNotFoundError,
        InternalServerError: CreateTransferFilePartsInternalServerError,
        BadGatewayError: CreateTransferFilePartsBadGatewayError,
        GatewayTimeoutError: CreateTransferFilePartsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferSignedUrlsError: {
        InvalidParameterError: CreateTransferSignedUrlsInvalidParameterError,
        UnauthorizedError: CreateTransferSignedUrlsUnauthorizedError,
        PasswordDoesNotMatchError: CreateTransferSignedUrlsPasswordDoesNotMatchError,
        NotFoundError: CreateTransferSignedUrlsNotFoundError,
        InternalServerError: CreateTransferSignedUrlsInternalServerError,
        BadGatewayError: CreateTransferSignedUrlsBadGatewayError,
        GatewayTimeoutError: CreateTransferSignedUrlsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteReportError: {
        InvalidParameterError: DeleteReportInvalidParameterError,
        UnauthorizedError: DeleteReportUnauthorizedError,
        TransferNotUploadedError: DeleteReportTransferNotUploadedError,
        NotFoundError: DeleteReportNotFoundError,
        InternalServerError: DeleteReportInternalServerError,
        BadGatewayError: DeleteReportBadGatewayError,
        GatewayTimeoutError: DeleteReportGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTeamTransferError: {
        InvalidParameterError: DeleteTeamTransferInvalidParameterError,
        UnauthorizedError: DeleteTeamTransferUnauthorizedError,
        TransferNotUploadedError: DeleteTeamTransferTransferNotUploadedError,
        NotFoundError: DeleteTeamTransferNotFoundError,
        InternalServerError: DeleteTeamTransferInternalServerError,
        BadGatewayError: DeleteTeamTransferBadGatewayError,
        GatewayTimeoutError: DeleteTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTransferError: {
        InvalidParameterError: DeleteTransferInvalidParameterError,
        UnauthorizedError: DeleteTransferUnauthorizedError,
        TransferNotUploadedError: DeleteTransferTransferNotUploadedError,
        NotFoundError: DeleteTransferNotFoundError,
        InternalServerError: DeleteTransferInternalServerError,
        BadGatewayError: DeleteTransferBadGatewayError,
        GatewayTimeoutError: DeleteTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTransferFileError: {
        InvalidParameterError: DeleteTransferFileInvalidParameterError,
        UnauthorizedError: DeleteTransferFileUnauthorizedError,
        NotFoundError: DeleteTransferFileNotFoundError,
        InternalServerError: DeleteTransferFileInternalServerError,
        BadGatewayError: DeleteTransferFileBadGatewayError,
        GatewayTimeoutError: DeleteTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserTransferError: {
        InvalidParameterError: DeleteUserTransferInvalidParameterError,
        UnauthorizedError: DeleteUserTransferUnauthorizedError,
        TransferNotUploadedError: DeleteUserTransferTransferNotUploadedError,
        NotFoundError: DeleteUserTransferNotFoundError,
        InternalServerError: DeleteUserTransferInternalServerError,
        BadGatewayError: DeleteUserTransferBadGatewayError,
        GatewayTimeoutError: DeleteUserTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetMetricStatisticError: {
        InvalidParameterError: GetMetricStatisticInvalidParameterError,
        UnauthorizedError: GetMetricStatisticUnauthorizedError,
        InternalServerError: GetMetricStatisticInternalServerError,
        BadGatewayError: GetMetricStatisticBadGatewayError,
        GatewayTimeoutError: GetMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetReportError: {
        InvalidParameterError: GetReportInvalidParameterError,
        UnauthorizedError: GetReportUnauthorizedError,
        NotFoundError: GetReportNotFoundError,
        InternalServerError: GetReportInternalServerError,
        BadGatewayError: GetReportBadGatewayError,
        GatewayTimeoutError: GetReportGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamMetricStatisticError: {
        InvalidParameterError: GetTeamMetricStatisticInvalidParameterError,
        UnauthorizedError: GetTeamMetricStatisticUnauthorizedError,
        InternalServerError: GetTeamMetricStatisticInternalServerError,
        BadGatewayError: GetTeamMetricStatisticBadGatewayError,
        GatewayTimeoutError: GetTeamMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferError: {
        InvalidParameterError: GetTeamTransferInvalidParameterError,
        UnauthorizedError: GetTeamTransferUnauthorizedError,
        NotFoundError: GetTeamTransferNotFoundError,
        InternalServerError: GetTeamTransferInternalServerError,
        BadGatewayError: GetTeamTransferBadGatewayError,
        GatewayTimeoutError: GetTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferFileError: {
        InvalidParameterError: GetTeamTransferFileInvalidParameterError,
        UnauthorizedError: GetTeamTransferFileUnauthorizedError,
        ForbiddenError: GetTeamTransferFileForbiddenError,
        NotFoundError: GetTeamTransferFileNotFoundError,
        InternalServerError: GetTeamTransferFileInternalServerError,
        BadGatewayError: GetTeamTransferFileBadGatewayError,
        GatewayTimeoutError: GetTeamTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferQueueError: {
        InvalidParameterError: GetTeamTransferQueueInvalidParameterError,
        UnauthorizedError: GetTeamTransferQueueUnauthorizedError,
        NotFoundError: GetTeamTransferQueueNotFoundError,
        InternalServerError: GetTeamTransferQueueInternalServerError,
        BadGatewayError: GetTeamTransferQueueBadGatewayError,
        GatewayTimeoutError: GetTeamTransferQueueGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUsageError: {
        InvalidParameterError: GetTeamUsageInvalidParameterError,
        UnauthorizedError: GetTeamUsageUnauthorizedError,
        InternalServerError: GetTeamUsageInternalServerError,
        BadGatewayError: GetTeamUsageBadGatewayError,
        GatewayTimeoutError: GetTeamUsageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUserMetricStatisticError: {
        InvalidParameterError: GetTeamUserMetricStatisticInvalidParameterError,
        UnauthorizedError: GetTeamUserMetricStatisticUnauthorizedError,
        InternalServerError: GetTeamUserMetricStatisticInternalServerError,
        BadGatewayError: GetTeamUserMetricStatisticBadGatewayError,
        GatewayTimeoutError: GetTeamUserMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUserUsageError: {
        InvalidParameterError: GetTeamUserUsageInvalidParameterError,
        UnauthorizedError: GetTeamUserUsageUnauthorizedError,
        InternalServerError: GetTeamUserUsageInternalServerError,
        BadGatewayError: GetTeamUserUsageBadGatewayError,
        GatewayTimeoutError: GetTeamUserUsageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferError: {
        InvalidParameterError: GetTransferInvalidParameterError,
        UnauthorizedError: GetTransferUnauthorizedError,
        NotFoundError: GetTransferNotFoundError,
        InternalServerError: GetTransferInternalServerError,
        BadGatewayError: GetTransferBadGatewayError,
        GatewayTimeoutError: GetTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferFileError: {
        InvalidParameterError: GetTransferFileInvalidParameterError,
        UnauthorizedError: GetTransferFileUnauthorizedError,
        NotFoundError: GetTransferFileNotFoundError,
        InternalServerError: GetTransferFileInternalServerError,
        BadGatewayError: GetTransferFileBadGatewayError,
        GatewayTimeoutError: GetTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferFilePreviewError: {
        InvalidParameterError: GetTransferFilePreviewInvalidParameterError,
        UnauthorizedError: GetTransferFilePreviewUnauthorizedError,
        PasswordDoesNotMatchError: GetTransferFilePreviewPasswordDoesNotMatchError,
        NotFoundError: GetTransferFilePreviewNotFoundError,
        InternalServerError: GetTransferFilePreviewInternalServerError,
        BadGatewayError: GetTransferFilePreviewBadGatewayError,
        GatewayTimeoutError: GetTransferFilePreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferPreviewError: {
        InvalidParameterError: GetTransferPreviewInvalidParameterError,
        UnauthorizedError: GetTransferPreviewUnauthorizedError,
        PasswordDoesNotMatchError: GetTransferPreviewPasswordDoesNotMatchError,
        InvalidEmailError: GetTransferPreviewInvalidEmailError,
        OwnerUsageExceededError: GetTransferPreviewOwnerUsageExceededError,
        AccessorUsageExceededError: GetTransferPreviewAccessorUsageExceededError,
        NotFoundError: GetTransferPreviewNotFoundError,
        InternalServerError: GetTransferPreviewInternalServerError,
        BadGatewayError: GetTransferPreviewBadGatewayError,
        GatewayTimeoutError: GetTransferPreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferQueueError: {
        InvalidParameterError: GetTransferQueueInvalidParameterError,
        UnauthorizedError: GetTransferQueueUnauthorizedError,
        NotFoundError: GetTransferQueueNotFoundError,
        InternalServerError: GetTransferQueueInternalServerError,
        BadGatewayError: GetTransferQueueBadGatewayError,
        GatewayTimeoutError: GetTransferQueueGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUsageError: {
        UnauthorizedError: GetUsageUnauthorizedError,
        InternalServerError: GetUsageInternalServerError,
        BadGatewayError: GetUsageBadGatewayError,
        GatewayTimeoutError: GetUsageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserMetricStatisticError: {
        InvalidParameterError: GetUserMetricStatisticInvalidParameterError,
        UnauthorizedError: GetUserMetricStatisticUnauthorizedError,
        InternalServerError: GetUserMetricStatisticInternalServerError,
        BadGatewayError: GetUserMetricStatisticBadGatewayError,
        GatewayTimeoutError: GetUserMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserTransferError: {
        InvalidParameterError: GetUserTransferInvalidParameterError,
        UnauthorizedError: GetUserTransferUnauthorizedError,
        NotFoundError: GetUserTransferNotFoundError,
        InternalServerError: GetUserTransferInternalServerError,
        BadGatewayError: GetUserTransferBadGatewayError,
        GatewayTimeoutError: GetUserTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserTransferFileError: {
        InvalidParameterError: GetUserTransferFileInvalidParameterError,
        UnauthorizedError: GetUserTransferFileUnauthorizedError,
        NotFoundError: GetUserTransferFileNotFoundError,
        InternalServerError: GetUserTransferFileInternalServerError,
        BadGatewayError: GetUserTransferFileBadGatewayError,
        GatewayTimeoutError: GetUserTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserUsageError: {
        InvalidParameterError: GetUserUsageInvalidParameterError,
        UnauthorizedError: GetUserUsageUnauthorizedError,
        InternalServerError: GetUserUsageInternalServerError,
        BadGatewayError: GetUserUsageBadGatewayError,
        GatewayTimeoutError: GetUserUsageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DownloadError: {
        BadRequestError: DownloadBadRequestError,
        UnauthorizedError: DownloadUnauthorizedError,
        FobiddenError: DownloadFobiddenError,
        NotFoundError: DownloadNotFoundError,
        InternalServerError: DownloadInternalServerError,
        BadGatewayError: DownloadBadGatewayError,
        GatewayTimeoutError: DownloadGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UploadTransferFilePartError: {
        BadRequestError: UploadTransferFilePartBadRequestError,
        InternalServerError: UploadTransferFilePartInternalServerError,
        NotFoundError: UploadTransferFilePartNotFoundError,
        NoSuchUploadError: UploadTransferFilePartNoSuchUploadError,
        AccessControlListNotSupportedError: UploadTransferFilePartAccessControlListNotSupportedError,
        AccessDeniedError: UploadTransferFilePartAccessDeniedError,
        AccessPointAlreadyOwnedByYouError: UploadTransferFilePartAccessPointAlreadyOwnedByYouError,
        AccountProblemError: UploadTransferFilePartAccountProblemError,
        AllAccessDisabledError: UploadTransferFilePartAllAccessDisabledError,
        AmbiguousGrantByEmailAddressError: UploadTransferFilePartAmbiguousGrantByEmailAddressError,
        AuthorizationHeaderMalformedError: UploadTransferFilePartAuthorizationHeaderMalformedError,
        BadDigestError: UploadTransferFilePartBadDigestError,
        EntityTooSmallError: UploadTransferFilePartEntityTooSmallError,
        EntityTooLargeError: UploadTransferFilePartEntityTooLargeError,
        ExpiredTokenError: UploadTransferFilePartExpiredTokenError,
        IllegalLocationConstraintExceptionError: UploadTransferFilePartIllegalLocationConstraintExceptionError,
        IllegalVersioningConfigurationExceptionError: UploadTransferFilePartIllegalVersioningConfigurationExceptionError,
        IncompleteBodyError: UploadTransferFilePartIncompleteBodyError,
        InlineDataTooLargeError: UploadTransferFilePartInlineDataTooLargeError,
        InternalError: UploadTransferFilePartInternalError,
        InvalidAccessKeyIdError: UploadTransferFilePartInvalidAccessKeyIdError,
        InvalidArgumentError: UploadTransferFilePartInvalidArgumentError,
        InvalidBucketNameError: UploadTransferFilePartInvalidBucketNameError,
        InvalidBucketStateError: UploadTransferFilePartInvalidBucketStateError,
        InvalidDigestError: UploadTransferFilePartInvalidDigestError,
        InvalidLocationConstraintError: UploadTransferFilePartInvalidLocationConstraintError,
        InvalidObjectStateError: UploadTransferFilePartInvalidObjectStateError,
        InvalidPartError: UploadTransferFilePartInvalidPartError,
        InvalidPartOrderError: UploadTransferFilePartInvalidPartOrderError,
        InvalidPayerError: UploadTransferFilePartInvalidPayerError,
        InvalidPolicyDocumentError: UploadTransferFilePartInvalidPolicyDocumentError,
        InvalidRangeError: UploadTransferFilePartInvalidRangeError,
        InvalidRequestError: UploadTransferFilePartInvalidRequestError,
        InvalidSecurityError: UploadTransferFilePartInvalidSecurityError,
        InvalidTokenError: UploadTransferFilePartInvalidTokenError,
        InvalidURIError: UploadTransferFilePartInvalidURIError,
        KeyTooLongError: UploadTransferFilePartKeyTooLongError,
        MaxMessageLengthExceededError: UploadTransferFilePartMaxMessageLengthExceededError,
        MetadataTooLargeError: UploadTransferFilePartMetadataTooLargeError,
        MissingContentLengthError: UploadTransferFilePartMissingContentLengthError,
        MissingRequestBodyError: UploadTransferFilePartMissingRequestBodyError,
        MissingSecurityHeaderError: UploadTransferFilePartMissingSecurityHeaderError,
        NoSuchBucketError: UploadTransferFilePartNoSuchBucketError,
        NoSuchBucketPolicyError: UploadTransferFilePartNoSuchBucketPolicyError,
        NoSuchCORSConfigurationError: UploadTransferFilePartNoSuchCORSConfigurationError,
        NoSuchKeyError: UploadTransferFilePartNoSuchKeyError,
        NotImplementedError: UploadTransferFilePartNotImplementedError,
        RequestHeaderSectionTooLargeError: UploadTransferFilePartRequestHeaderSectionTooLargeError,
        RequestTimeoutError: UploadTransferFilePartRequestTimeoutError,
        RequestTimeTooSkewedError: UploadTransferFilePartRequestTimeTooSkewedError,
        ServerSideEncryptionConfigurationNotFoundError: UploadTransferFilePartServerSideEncryptionConfigurationNotFoundError,
        ServiceUnavailableError: UploadTransferFilePartServiceUnavailableError,
        SignatureDoesNotMatchError: UploadTransferFilePartSignatureDoesNotMatchError,
        SlowDownError: UploadTransferFilePartSlowDownError,
        TokenRefreshRequiredError: UploadTransferFilePartTokenRefreshRequiredError,
        UnexpectedContentError: UploadTransferFilePartUnexpectedContentError,
        UserKeyMustBeSpecifiedError: UploadTransferFilePartUserKeyMustBeSpecifiedError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
