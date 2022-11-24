import { UnknownError, NetworkError } from "@smash-sdk/core";
import { BadRequestError as ListTeamTransferEventsBadRequestError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { UnauthorizedError as ListTeamTransferEventsUnauthorizedError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { NotFoundError as ListTeamTransferEventsNotFoundError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { InternalServerError as ListTeamTransferEventsInternalServerError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { BadGatewayError as ListTeamTransferEventsBadGatewayError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { GatewayTimeoutError as ListTeamTransferEventsGatewayTimeoutError } from "./types/ListTeamTransferEvents/ListTeamTransferEventsError";
import { BadRequestError as ListTeamTransferFilesBadRequestError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { UnauthorizedError as ListTeamTransferFilesUnauthorizedError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { ForbiddenError as ListTeamTransferFilesForbiddenError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { NotFoundError as ListTeamTransferFilesNotFoundError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { InternalServerError as ListTeamTransferFilesInternalServerError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { BadGatewayError as ListTeamTransferFilesBadGatewayError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { GatewayTimeoutError as ListTeamTransferFilesGatewayTimeoutError } from "./types/ListTeamTransferFiles/ListTeamTransferFilesError";
import { BadRequestError as ListTeamTransfersBadRequestError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { UnauthorizedError as ListTeamTransfersUnauthorizedError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { ForbiddenError as ListTeamTransfersForbiddenError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { NotFoundError as ListTeamTransfersNotFoundError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { InternalServerError as ListTeamTransfersInternalServerError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { BadGatewayError as ListTeamTransfersBadGatewayError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { GatewayTimeoutError as ListTeamTransfersGatewayTimeoutError } from "./types/ListTeamTransfers/ListTeamTransfersError";
import { BadRequestError as ListTeamUserTransfersBadRequestError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { UnauthorizedError as ListTeamUserTransfersUnauthorizedError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { InternalServerError as ListTeamUserTransfersInternalServerError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { BadGatewayError as ListTeamUserTransfersBadGatewayError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { GatewayTimeoutError as ListTeamUserTransfersGatewayTimeoutError } from "./types/ListTeamUserTransfers/ListTeamUserTransfersError";
import { BadRequestError as ListTransferEventsBadRequestError } from "./types/ListTransferEvents/ListTransferEventsError";
import { UnauthorizedError as ListTransferEventsUnauthorizedError } from "./types/ListTransferEvents/ListTransferEventsError";
import { NotFoundError as ListTransferEventsNotFoundError } from "./types/ListTransferEvents/ListTransferEventsError";
import { InternalServerError as ListTransferEventsInternalServerError } from "./types/ListTransferEvents/ListTransferEventsError";
import { BadGatewayError as ListTransferEventsBadGatewayError } from "./types/ListTransferEvents/ListTransferEventsError";
import { GatewayTimeoutError as ListTransferEventsGatewayTimeoutError } from "./types/ListTransferEvents/ListTransferEventsError";
import { BadRequestError as ListTransferFilesBadRequestError } from "./types/ListTransferFiles/ListTransferFilesError";
import { UnauthorizedError as ListTransferFilesUnauthorizedError } from "./types/ListTransferFiles/ListTransferFilesError";
import { NotFoundError as ListTransferFilesNotFoundError } from "./types/ListTransferFiles/ListTransferFilesError";
import { InternalServerError as ListTransferFilesInternalServerError } from "./types/ListTransferFiles/ListTransferFilesError";
import { BadGatewayError as ListTransferFilesBadGatewayError } from "./types/ListTransferFiles/ListTransferFilesError";
import { GatewayTimeoutError as ListTransferFilesGatewayTimeoutError } from "./types/ListTransferFiles/ListTransferFilesError";
import { BadRequestError as ListTransferFilesPreviewBadRequestError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { UnauthorizedError as ListTransferFilesPreviewUnauthorizedError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { PasswordDoesNotMatchError as ListTransferFilesPreviewPasswordDoesNotMatchError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { NotFoundError as ListTransferFilesPreviewNotFoundError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { InternalServerError as ListTransferFilesPreviewInternalServerError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { BadGatewayError as ListTransferFilesPreviewBadGatewayError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { GatewayTimeoutError as ListTransferFilesPreviewGatewayTimeoutError } from "./types/ListTransferFilesPreview/ListTransferFilesPreviewError";
import { BadRequestError as ListTransfersBadRequestError } from "./types/ListTransfers/ListTransfersError";
import { UnauthorizedError as ListTransfersUnauthorizedError } from "./types/ListTransfers/ListTransfersError";
import { NotFoundError as ListTransfersNotFoundError } from "./types/ListTransfers/ListTransfersError";
import { InternalServerError as ListTransfersInternalServerError } from "./types/ListTransfers/ListTransfersError";
import { BadGatewayError as ListTransfersBadGatewayError } from "./types/ListTransfers/ListTransfersError";
import { GatewayTimeoutError as ListTransfersGatewayTimeoutError } from "./types/ListTransfers/ListTransfersError";
import { BadRequestError as ListUserTransferEventsBadRequestError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { UnauthorizedError as ListUserTransferEventsUnauthorizedError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { NotFoundError as ListUserTransferEventsNotFoundError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { InternalServerError as ListUserTransferEventsInternalServerError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { BadGatewayError as ListUserTransferEventsBadGatewayError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { GatewayTimeoutError as ListUserTransferEventsGatewayTimeoutError } from "./types/ListUserTransferEvents/ListUserTransferEventsError";
import { BadRequestError as ListUserTransferFilesBadRequestError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { UnauthorizedError as ListUserTransferFilesUnauthorizedError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { NotFoundError as ListUserTransferFilesNotFoundError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { InternalServerError as ListUserTransferFilesInternalServerError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { BadGatewayError as ListUserTransferFilesBadGatewayError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { GatewayTimeoutError as ListUserTransferFilesGatewayTimeoutError } from "./types/ListUserTransferFiles/ListUserTransferFilesError";
import { BadRequestError as ListUserTransfersBadRequestError } from "./types/ListUserTransfers/ListUserTransfersError";
import { UnauthorizedError as ListUserTransfersUnauthorizedError } from "./types/ListUserTransfers/ListUserTransfersError";
import { NotFoundError as ListUserTransfersNotFoundError } from "./types/ListUserTransfers/ListUserTransfersError";
import { InternalServerError as ListUserTransfersInternalServerError } from "./types/ListUserTransfers/ListUserTransfersError";
import { BadGatewayError as ListUserTransfersBadGatewayError } from "./types/ListUserTransfers/ListUserTransfersError";
import { GatewayTimeoutError as ListUserTransfersGatewayTimeoutError } from "./types/ListUserTransfers/ListUserTransfersError";
import { BadRequestError as LockTransferBadRequestError } from "./types/LockTransfer/LockTransferError";
import { UnauthorizedError as LockTransferUnauthorizedError } from "./types/LockTransfer/LockTransferError";
import { TransferAlreadyLockedError as LockTransferTransferAlreadyLockedError } from "./types/LockTransfer/LockTransferError";
import { TransferIsDirtyError as LockTransferTransferIsDirtyError } from "./types/LockTransfer/LockTransferError";
import { TransferIsInQueueError as LockTransferTransferIsInQueueError } from "./types/LockTransfer/LockTransferError";
import { NotFoundError as LockTransferNotFoundError } from "./types/LockTransfer/LockTransferError";
import { InternalServerError as LockTransferInternalServerError } from "./types/LockTransfer/LockTransferError";
import { BadGatewayError as LockTransferBadGatewayError } from "./types/LockTransfer/LockTransferError";
import { GatewayTimeoutError as LockTransferGatewayTimeoutError } from "./types/LockTransfer/LockTransferError";
import { BadRequestError as UpdateTransferBadRequestError } from "./types/UpdateTransfer/UpdateTransferError";
import { UnauthorizedError as UpdateTransferUnauthorizedError } from "./types/UpdateTransfer/UpdateTransferError";
import { TransferAlreadyLockedError as UpdateTransferTransferAlreadyLockedError } from "./types/UpdateTransfer/UpdateTransferError";
import { NotFoundError as UpdateTransferNotFoundError } from "./types/UpdateTransfer/UpdateTransferError";
import { InternalServerError as UpdateTransferInternalServerError } from "./types/UpdateTransfer/UpdateTransferError";
import { BadGatewayError as UpdateTransferBadGatewayError } from "./types/UpdateTransfer/UpdateTransferError";
import { GatewayTimeoutError as UpdateTransferGatewayTimeoutError } from "./types/UpdateTransfer/UpdateTransferError";
import { BadRequestError as UpdateTransferCustomizationBadRequestError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { UnauthorizedError as UpdateTransferCustomizationUnauthorizedError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { NotFoundError as UpdateTransferCustomizationNotFoundError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { InternalServerError as UpdateTransferCustomizationInternalServerError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { BadGatewayError as UpdateTransferCustomizationBadGatewayError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { GatewayTimeoutError as UpdateTransferCustomizationGatewayTimeoutError } from "./types/UpdateTransferCustomization/UpdateTransferCustomizationError";
import { BadRequestError as UpdateTransferFileBadRequestError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { UnauthorizedError as UpdateTransferFileUnauthorizedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { TransferAlreadyLockedError as UpdateTransferFileTransferAlreadyLockedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { FileAlreadyLockedError as UpdateTransferFileFileAlreadyLockedError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { NotFoundError as UpdateTransferFileNotFoundError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { InternalServerError as UpdateTransferFileInternalServerError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { BadGatewayError as UpdateTransferFileBadGatewayError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { GatewayTimeoutError as UpdateTransferFileGatewayTimeoutError } from "./types/UpdateTransferFile/UpdateTransferFileError";
import { BadRequestError as UpdateTransferFilePartBadRequestError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { UnauthorizedError as UpdateTransferFilePartUnauthorizedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { TransferAlreadyLockedError as UpdateTransferFilePartTransferAlreadyLockedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { FileAlreadyLockedError as UpdateTransferFilePartFileAlreadyLockedError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { NotFoundError as UpdateTransferFilePartNotFoundError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { InternalServerError as UpdateTransferFilePartInternalServerError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { BadGatewayError as UpdateTransferFilePartBadGatewayError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { GatewayTimeoutError as UpdateTransferFilePartGatewayTimeoutError } from "./types/UpdateTransferFilePart/UpdateTransferFilePartError";
import { BadRequestError as UpdateTransferFilePartsBadRequestError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { UnauthorizedError as UpdateTransferFilePartsUnauthorizedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { TransferAlreadyLockedError as UpdateTransferFilePartsTransferAlreadyLockedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { FileAlreadyLockedError as UpdateTransferFilePartsFileAlreadyLockedError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { NotFoundError as UpdateTransferFilePartsNotFoundError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { InternalServerError as UpdateTransferFilePartsInternalServerError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { BadGatewayError as UpdateTransferFilePartsBadGatewayError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { GatewayTimeoutError as UpdateTransferFilePartsGatewayTimeoutError } from "./types/UpdateTransferFileParts/UpdateTransferFilePartsError";
import { BadRequestError as CreateTeamTransferBadRequestError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { UnauthorizedError as CreateTeamTransferUnauthorizedError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { ForbiddenError as CreateTeamTransferForbiddenError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { CustomUrlAlreadyInUseError as CreateTeamTransferCustomUrlAlreadyInUseError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { InternalServerError as CreateTeamTransferInternalServerError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { BadGatewayError as CreateTeamTransferBadGatewayError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { GatewayTimeoutError as CreateTeamTransferGatewayTimeoutError } from "./types/CreateTeamTransfer/CreateTeamTransferError";
import { BadRequestError as CreateTransferBadRequestError } from "./types/CreateTransfer/CreateTransferError";
import { UnauthorizedError as CreateTransferUnauthorizedError } from "./types/CreateTransfer/CreateTransferError";
import { ForbiddenError as CreateTransferForbiddenError } from "./types/CreateTransfer/CreateTransferError";
import { CustomUrlAlreadyInUseError as CreateTransferCustomUrlAlreadyInUseError } from "./types/CreateTransfer/CreateTransferError";
import { InternalServerError as CreateTransferInternalServerError } from "./types/CreateTransfer/CreateTransferError";
import { BadGatewayError as CreateTransferBadGatewayError } from "./types/CreateTransfer/CreateTransferError";
import { GatewayTimeoutError as CreateTransferGatewayTimeoutError } from "./types/CreateTransfer/CreateTransferError";
import { BadRequestError as CreateTransferFileBadRequestError } from "./types/CreateTransferFile/CreateTransferFileError";
import { UnauthorizedError as CreateTransferFileUnauthorizedError } from "./types/CreateTransferFile/CreateTransferFileError";
import { TransferAlreadyLockedError as CreateTransferFileTransferAlreadyLockedError } from "./types/CreateTransferFile/CreateTransferFileError";
import { TransferIsInQueueError as CreateTransferFileTransferIsInQueueError } from "./types/CreateTransferFile/CreateTransferFileError";
import { NotFoundError as CreateTransferFileNotFoundError } from "./types/CreateTransferFile/CreateTransferFileError";
import { ConflictError as CreateTransferFileConflictError } from "./types/CreateTransferFile/CreateTransferFileError";
import { InternalServerError as CreateTransferFileInternalServerError } from "./types/CreateTransferFile/CreateTransferFileError";
import { BadGatewayError as CreateTransferFileBadGatewayError } from "./types/CreateTransferFile/CreateTransferFileError";
import { GatewayTimeoutError as CreateTransferFileGatewayTimeoutError } from "./types/CreateTransferFile/CreateTransferFileError";
import { BadRequestError as CreateTransferFilePartBadRequestError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { UnauthorizedError as CreateTransferFilePartUnauthorizedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { TransferAlreadyLockedError as CreateTransferFilePartTransferAlreadyLockedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { FileAlreadyLockedError as CreateTransferFilePartFileAlreadyLockedError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { NotFoundError as CreateTransferFilePartNotFoundError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { InternalServerError as CreateTransferFilePartInternalServerError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { BadGatewayError as CreateTransferFilePartBadGatewayError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { GatewayTimeoutError as CreateTransferFilePartGatewayTimeoutError } from "./types/CreateTransferFilePart/CreateTransferFilePartError";
import { BadRequestError as CreateTransferFilePartsBadRequestError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { UnauthorizedError as CreateTransferFilePartsUnauthorizedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { TransferAlreadyLockedError as CreateTransferFilePartsTransferAlreadyLockedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { FileAlreadyLockedError as CreateTransferFilePartsFileAlreadyLockedError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { NotFoundError as CreateTransferFilePartsNotFoundError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { InternalServerError as CreateTransferFilePartsInternalServerError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { BadGatewayError as CreateTransferFilePartsBadGatewayError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { GatewayTimeoutError as CreateTransferFilePartsGatewayTimeoutError } from "./types/CreateTransferFileParts/CreateTransferFilePartsError";
import { BadRequestError as CreateTransferSignedUrlsBadRequestError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { UnauthorizedError as CreateTransferSignedUrlsUnauthorizedError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { PasswordDoesNotMatchError as CreateTransferSignedUrlsPasswordDoesNotMatchError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { NotFoundError as CreateTransferSignedUrlsNotFoundError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { InternalServerError as CreateTransferSignedUrlsInternalServerError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { BadGatewayError as CreateTransferSignedUrlsBadGatewayError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { GatewayTimeoutError as CreateTransferSignedUrlsGatewayTimeoutError } from "./types/CreateTransferSignedUrls/CreateTransferSignedUrlsError";
import { BadRequestError as DeleteReportBadRequestError } from "./types/DeleteReport/DeleteReportError";
import { UnauthorizedError as DeleteReportUnauthorizedError } from "./types/DeleteReport/DeleteReportError";
import { TransferNotUploadedError as DeleteReportTransferNotUploadedError } from "./types/DeleteReport/DeleteReportError";
import { NotFoundError as DeleteReportNotFoundError } from "./types/DeleteReport/DeleteReportError";
import { InternalServerError as DeleteReportInternalServerError } from "./types/DeleteReport/DeleteReportError";
import { BadGatewayError as DeleteReportBadGatewayError } from "./types/DeleteReport/DeleteReportError";
import { GatewayTimeoutError as DeleteReportGatewayTimeoutError } from "./types/DeleteReport/DeleteReportError";
import { BadRequestError as DeleteTeamTransferBadRequestError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { UnauthorizedError as DeleteTeamTransferUnauthorizedError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { TransferNotUploadedError as DeleteTeamTransferTransferNotUploadedError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { NotFoundError as DeleteTeamTransferNotFoundError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { InternalServerError as DeleteTeamTransferInternalServerError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { BadGatewayError as DeleteTeamTransferBadGatewayError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { GatewayTimeoutError as DeleteTeamTransferGatewayTimeoutError } from "./types/DeleteTeamTransfer/DeleteTeamTransferError";
import { BadRequestError as DeleteTransferBadRequestError } from "./types/DeleteTransfer/DeleteTransferError";
import { UnauthorizedError as DeleteTransferUnauthorizedError } from "./types/DeleteTransfer/DeleteTransferError";
import { TransferNotUploadedError as DeleteTransferTransferNotUploadedError } from "./types/DeleteTransfer/DeleteTransferError";
import { NotFoundError as DeleteTransferNotFoundError } from "./types/DeleteTransfer/DeleteTransferError";
import { InternalServerError as DeleteTransferInternalServerError } from "./types/DeleteTransfer/DeleteTransferError";
import { BadGatewayError as DeleteTransferBadGatewayError } from "./types/DeleteTransfer/DeleteTransferError";
import { GatewayTimeoutError as DeleteTransferGatewayTimeoutError } from "./types/DeleteTransfer/DeleteTransferError";
import { BadRequestError as DeleteTransferFileBadRequestError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { UnauthorizedError as DeleteTransferFileUnauthorizedError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { NotFoundError as DeleteTransferFileNotFoundError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { InternalServerError as DeleteTransferFileInternalServerError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { BadGatewayError as DeleteTransferFileBadGatewayError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { GatewayTimeoutError as DeleteTransferFileGatewayTimeoutError } from "./types/DeleteTransferFile/DeleteTransferFileError";
import { BadRequestError as DeleteUserTransferBadRequestError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { UnauthorizedError as DeleteUserTransferUnauthorizedError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { TransferNotUploadedError as DeleteUserTransferTransferNotUploadedError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { NotFoundError as DeleteUserTransferNotFoundError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { InternalServerError as DeleteUserTransferInternalServerError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { BadGatewayError as DeleteUserTransferBadGatewayError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { GatewayTimeoutError as DeleteUserTransferGatewayTimeoutError } from "./types/DeleteUserTransfer/DeleteUserTransferError";
import { BadRequestError as GetMetricStatisticBadRequestError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { UnauthorizedError as GetMetricStatisticUnauthorizedError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { InternalServerError as GetMetricStatisticInternalServerError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { BadGatewayError as GetMetricStatisticBadGatewayError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { GatewayTimeoutError as GetMetricStatisticGatewayTimeoutError } from "./types/GetMetricStatistic/GetMetricStatisticError";
import { BadRequestError as GetReportBadRequestError } from "./types/GetReport/GetReportError";
import { UnauthorizedError as GetReportUnauthorizedError } from "./types/GetReport/GetReportError";
import { NotFoundError as GetReportNotFoundError } from "./types/GetReport/GetReportError";
import { InternalServerError as GetReportInternalServerError } from "./types/GetReport/GetReportError";
import { BadGatewayError as GetReportBadGatewayError } from "./types/GetReport/GetReportError";
import { GatewayTimeoutError as GetReportGatewayTimeoutError } from "./types/GetReport/GetReportError";
import { BadRequestError as GetTeamMetricStatisticBadRequestError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { UnauthorizedError as GetTeamMetricStatisticUnauthorizedError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { InternalServerError as GetTeamMetricStatisticInternalServerError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { BadGatewayError as GetTeamMetricStatisticBadGatewayError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { GatewayTimeoutError as GetTeamMetricStatisticGatewayTimeoutError } from "./types/GetTeamMetricStatistic/GetTeamMetricStatisticError";
import { BadRequestError as GetTeamTransferBadRequestError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { UnauthorizedError as GetTeamTransferUnauthorizedError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { NotFoundError as GetTeamTransferNotFoundError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { InternalServerError as GetTeamTransferInternalServerError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { BadGatewayError as GetTeamTransferBadGatewayError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { GatewayTimeoutError as GetTeamTransferGatewayTimeoutError } from "./types/GetTeamTransfer/GetTeamTransferError";
import { BadRequestError as GetTeamTransferFileBadRequestError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { UnauthorizedError as GetTeamTransferFileUnauthorizedError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { ForbiddenError as GetTeamTransferFileForbiddenError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { NotFoundError as GetTeamTransferFileNotFoundError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { InternalServerError as GetTeamTransferFileInternalServerError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { BadGatewayError as GetTeamTransferFileBadGatewayError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { GatewayTimeoutError as GetTeamTransferFileGatewayTimeoutError } from "./types/GetTeamTransferFile/GetTeamTransferFileError";
import { BadRequestError as GetTeamTransferQueueBadRequestError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { UnauthorizedError as GetTeamTransferQueueUnauthorizedError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { NotFoundError as GetTeamTransferQueueNotFoundError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { InternalServerError as GetTeamTransferQueueInternalServerError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { BadGatewayError as GetTeamTransferQueueBadGatewayError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { GatewayTimeoutError as GetTeamTransferQueueGatewayTimeoutError } from "./types/GetTeamTransferQueue/GetTeamTransferQueueError";
import { BadRequestError as GetTeamUserMetricStatisticBadRequestError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { UnauthorizedError as GetTeamUserMetricStatisticUnauthorizedError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { InternalServerError as GetTeamUserMetricStatisticInternalServerError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { BadGatewayError as GetTeamUserMetricStatisticBadGatewayError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { GatewayTimeoutError as GetTeamUserMetricStatisticGatewayTimeoutError } from "./types/GetTeamUserMetricStatistic/GetTeamUserMetricStatisticError";
import { BadRequestError as GetTransferBadRequestError } from "./types/GetTransfer/GetTransferError";
import { UnauthorizedError as GetTransferUnauthorizedError } from "./types/GetTransfer/GetTransferError";
import { NotFoundError as GetTransferNotFoundError } from "./types/GetTransfer/GetTransferError";
import { InternalServerError as GetTransferInternalServerError } from "./types/GetTransfer/GetTransferError";
import { BadGatewayError as GetTransferBadGatewayError } from "./types/GetTransfer/GetTransferError";
import { GatewayTimeoutError as GetTransferGatewayTimeoutError } from "./types/GetTransfer/GetTransferError";
import { BadRequestError as GetTransferFileBadRequestError } from "./types/GetTransferFile/GetTransferFileError";
import { UnauthorizedError as GetTransferFileUnauthorizedError } from "./types/GetTransferFile/GetTransferFileError";
import { NotFoundError as GetTransferFileNotFoundError } from "./types/GetTransferFile/GetTransferFileError";
import { InternalServerError as GetTransferFileInternalServerError } from "./types/GetTransferFile/GetTransferFileError";
import { BadGatewayError as GetTransferFileBadGatewayError } from "./types/GetTransferFile/GetTransferFileError";
import { GatewayTimeoutError as GetTransferFileGatewayTimeoutError } from "./types/GetTransferFile/GetTransferFileError";
import { BadRequestError as GetTransferFilePreviewBadRequestError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { UnauthorizedError as GetTransferFilePreviewUnauthorizedError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { PasswordDoesNotMatchError as GetTransferFilePreviewPasswordDoesNotMatchError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { NotFoundError as GetTransferFilePreviewNotFoundError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { InternalServerError as GetTransferFilePreviewInternalServerError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { BadGatewayError as GetTransferFilePreviewBadGatewayError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { GatewayTimeoutError as GetTransferFilePreviewGatewayTimeoutError } from "./types/GetTransferFilePreview/GetTransferFilePreviewError";
import { BadRequestError as GetTransferPreviewBadRequestError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { UnauthorizedError as GetTransferPreviewUnauthorizedError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { PasswordDoesNotMatchError as GetTransferPreviewPasswordDoesNotMatchError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { InvalidEmailError as GetTransferPreviewInvalidEmailError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { NotFoundError as GetTransferPreviewNotFoundError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { InternalServerError as GetTransferPreviewInternalServerError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { BadGatewayError as GetTransferPreviewBadGatewayError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { GatewayTimeoutError as GetTransferPreviewGatewayTimeoutError } from "./types/GetTransferPreview/GetTransferPreviewError";
import { BadRequestError as GetTransferQueueBadRequestError } from "./types/GetTransferQueue/GetTransferQueueError";
import { UnauthorizedError as GetTransferQueueUnauthorizedError } from "./types/GetTransferQueue/GetTransferQueueError";
import { NotFoundError as GetTransferQueueNotFoundError } from "./types/GetTransferQueue/GetTransferQueueError";
import { InternalServerError as GetTransferQueueInternalServerError } from "./types/GetTransferQueue/GetTransferQueueError";
import { BadGatewayError as GetTransferQueueBadGatewayError } from "./types/GetTransferQueue/GetTransferQueueError";
import { GatewayTimeoutError as GetTransferQueueGatewayTimeoutError } from "./types/GetTransferQueue/GetTransferQueueError";
import { BadRequestError as GetUserMetricStatisticBadRequestError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { UnauthorizedError as GetUserMetricStatisticUnauthorizedError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { InternalServerError as GetUserMetricStatisticInternalServerError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { BadGatewayError as GetUserMetricStatisticBadGatewayError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { GatewayTimeoutError as GetUserMetricStatisticGatewayTimeoutError } from "./types/GetUserMetricStatistic/GetUserMetricStatisticError";
import { BadRequestError as GetUserTransferBadRequestError } from "./types/GetUserTransfer/GetUserTransferError";
import { UnauthorizedError as GetUserTransferUnauthorizedError } from "./types/GetUserTransfer/GetUserTransferError";
import { NotFoundError as GetUserTransferNotFoundError } from "./types/GetUserTransfer/GetUserTransferError";
import { InternalServerError as GetUserTransferInternalServerError } from "./types/GetUserTransfer/GetUserTransferError";
import { BadGatewayError as GetUserTransferBadGatewayError } from "./types/GetUserTransfer/GetUserTransferError";
import { GatewayTimeoutError as GetUserTransferGatewayTimeoutError } from "./types/GetUserTransfer/GetUserTransferError";
import { BadRequestError as GetUserTransferFileBadRequestError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { UnauthorizedError as GetUserTransferFileUnauthorizedError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { NotFoundError as GetUserTransferFileNotFoundError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { InternalServerError as GetUserTransferFileInternalServerError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { BadGatewayError as GetUserTransferFileBadGatewayError } from "./types/GetUserTransferFile/GetUserTransferFileError";
import { GatewayTimeoutError as GetUserTransferFileGatewayTimeoutError } from "./types/GetUserTransferFile/GetUserTransferFileError";

export const errors = {
    ListTeamTransferEventsError: {
        BadRequest: ListTeamTransferEventsBadRequestError,
        Unauthorized: ListTeamTransferEventsUnauthorizedError,
        NotFound: ListTeamTransferEventsNotFoundError,
        InternalServerError: ListTeamTransferEventsInternalServerError,
        BadGateway: ListTeamTransferEventsBadGatewayError,
        GatewayTimeout: ListTeamTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamTransferFilesError: {
        BadRequest: ListTeamTransferFilesBadRequestError,
        Unauthorized: ListTeamTransferFilesUnauthorizedError,
        Forbidden: ListTeamTransferFilesForbiddenError,
        NotFound: ListTeamTransferFilesNotFoundError,
        InternalServerError: ListTeamTransferFilesInternalServerError,
        BadGateway: ListTeamTransferFilesBadGatewayError,
        GatewayTimeout: ListTeamTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamTransfersError: {
        BadRequest: ListTeamTransfersBadRequestError,
        Unauthorized: ListTeamTransfersUnauthorizedError,
        Forbidden: ListTeamTransfersForbiddenError,
        NotFound: ListTeamTransfersNotFoundError,
        InternalServerError: ListTeamTransfersInternalServerError,
        BadGateway: ListTeamTransfersBadGatewayError,
        GatewayTimeout: ListTeamTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamUserTransfersError: {
        BadRequest: ListTeamUserTransfersBadRequestError,
        Unauthorized: ListTeamUserTransfersUnauthorizedError,
        InternalServerError: ListTeamUserTransfersInternalServerError,
        BadGateway: ListTeamUserTransfersBadGatewayError,
        GatewayTimeout: ListTeamUserTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferEventsError: {
        BadRequest: ListTransferEventsBadRequestError,
        Unauthorized: ListTransferEventsUnauthorizedError,
        NotFound: ListTransferEventsNotFoundError,
        InternalServerError: ListTransferEventsInternalServerError,
        BadGateway: ListTransferEventsBadGatewayError,
        GatewayTimeout: ListTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferFilesError: {
        BadRequest: ListTransferFilesBadRequestError,
        Unauthorized: ListTransferFilesUnauthorizedError,
        NotFound: ListTransferFilesNotFoundError,
        InternalServerError: ListTransferFilesInternalServerError,
        BadGateway: ListTransferFilesBadGatewayError,
        GatewayTimeout: ListTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransferFilesPreviewError: {
        BadRequest: ListTransferFilesPreviewBadRequestError,
        Unauthorized: ListTransferFilesPreviewUnauthorizedError,
        PasswordDoesNotMatch: ListTransferFilesPreviewPasswordDoesNotMatchError,
        NotFound: ListTransferFilesPreviewNotFoundError,
        InternalServerError: ListTransferFilesPreviewInternalServerError,
        BadGateway: ListTransferFilesPreviewBadGatewayError,
        GatewayTimeout: ListTransferFilesPreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTransfersError: {
        BadRequest: ListTransfersBadRequestError,
        Unauthorized: ListTransfersUnauthorizedError,
        NotFound: ListTransfersNotFoundError,
        InternalServerError: ListTransfersInternalServerError,
        BadGateway: ListTransfersBadGatewayError,
        GatewayTimeout: ListTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransferEventsError: {
        BadRequest: ListUserTransferEventsBadRequestError,
        Unauthorized: ListUserTransferEventsUnauthorizedError,
        NotFound: ListUserTransferEventsNotFoundError,
        InternalServerError: ListUserTransferEventsInternalServerError,
        BadGateway: ListUserTransferEventsBadGatewayError,
        GatewayTimeout: ListUserTransferEventsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransferFilesError: {
        BadRequest: ListUserTransferFilesBadRequestError,
        Unauthorized: ListUserTransferFilesUnauthorizedError,
        NotFound: ListUserTransferFilesNotFoundError,
        InternalServerError: ListUserTransferFilesInternalServerError,
        BadGateway: ListUserTransferFilesBadGatewayError,
        GatewayTimeout: ListUserTransferFilesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserTransfersError: {
        BadRequest: ListUserTransfersBadRequestError,
        Unauthorized: ListUserTransfersUnauthorizedError,
        NotFound: ListUserTransfersNotFoundError,
        InternalServerError: ListUserTransfersInternalServerError,
        BadGateway: ListUserTransfersBadGatewayError,
        GatewayTimeout: ListUserTransfersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    LockTransferError: {
        BadRequest: LockTransferBadRequestError,
        Unauthorized: LockTransferUnauthorizedError,
        TransferAlreadyLocked: LockTransferTransferAlreadyLockedError,
        TransferIsDirty: LockTransferTransferIsDirtyError,
        TransferIsInQueue: LockTransferTransferIsInQueueError,
        NotFound: LockTransferNotFoundError,
        InternalServerError: LockTransferInternalServerError,
        BadGateway: LockTransferBadGatewayError,
        GatewayTimeout: LockTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferError: {
        BadRequest: UpdateTransferBadRequestError,
        Unauthorized: UpdateTransferUnauthorizedError,
        TransferAlreadyLocked: UpdateTransferTransferAlreadyLockedError,
        NotFound: UpdateTransferNotFoundError,
        InternalServerError: UpdateTransferInternalServerError,
        BadGateway: UpdateTransferBadGatewayError,
        GatewayTimeout: UpdateTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferCustomizationError: {
        BadRequest: UpdateTransferCustomizationBadRequestError,
        Unauthorized: UpdateTransferCustomizationUnauthorizedError,
        NotFound: UpdateTransferCustomizationNotFoundError,
        InternalServerError: UpdateTransferCustomizationInternalServerError,
        BadGateway: UpdateTransferCustomizationBadGatewayError,
        GatewayTimeout: UpdateTransferCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFileError: {
        BadRequest: UpdateTransferFileBadRequestError,
        Unauthorized: UpdateTransferFileUnauthorizedError,
        TransferAlreadyLocked: UpdateTransferFileTransferAlreadyLockedError,
        FileAlreadyLocked: UpdateTransferFileFileAlreadyLockedError,
        NotFound: UpdateTransferFileNotFoundError,
        InternalServerError: UpdateTransferFileInternalServerError,
        BadGateway: UpdateTransferFileBadGatewayError,
        GatewayTimeout: UpdateTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFilePartError: {
        BadRequest: UpdateTransferFilePartBadRequestError,
        Unauthorized: UpdateTransferFilePartUnauthorizedError,
        TransferAlreadyLocked: UpdateTransferFilePartTransferAlreadyLockedError,
        FileAlreadyLocked: UpdateTransferFilePartFileAlreadyLockedError,
        NotFound: UpdateTransferFilePartNotFoundError,
        InternalServerError: UpdateTransferFilePartInternalServerError,
        BadGateway: UpdateTransferFilePartBadGatewayError,
        GatewayTimeout: UpdateTransferFilePartGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateTransferFilePartsError: {
        BadRequest: UpdateTransferFilePartsBadRequestError,
        Unauthorized: UpdateTransferFilePartsUnauthorizedError,
        TransferAlreadyLocked: UpdateTransferFilePartsTransferAlreadyLockedError,
        FileAlreadyLocked: UpdateTransferFilePartsFileAlreadyLockedError,
        NotFound: UpdateTransferFilePartsNotFoundError,
        InternalServerError: UpdateTransferFilePartsInternalServerError,
        BadGateway: UpdateTransferFilePartsBadGatewayError,
        GatewayTimeout: UpdateTransferFilePartsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTeamTransferError: {
        BadRequest: CreateTeamTransferBadRequestError,
        Unauthorized: CreateTeamTransferUnauthorizedError,
        Forbidden: CreateTeamTransferForbiddenError,
        CustomUrlAlreadyInUse: CreateTeamTransferCustomUrlAlreadyInUseError,
        InternalServerError: CreateTeamTransferInternalServerError,
        BadGateway: CreateTeamTransferBadGatewayError,
        GatewayTimeout: CreateTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferError: {
        BadRequest: CreateTransferBadRequestError,
        Unauthorized: CreateTransferUnauthorizedError,
        Forbidden: CreateTransferForbiddenError,
        CustomUrlAlreadyInUse: CreateTransferCustomUrlAlreadyInUseError,
        InternalServerError: CreateTransferInternalServerError,
        BadGateway: CreateTransferBadGatewayError,
        GatewayTimeout: CreateTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFileError: {
        BadRequest: CreateTransferFileBadRequestError,
        Unauthorized: CreateTransferFileUnauthorizedError,
        TransferAlreadyLocked: CreateTransferFileTransferAlreadyLockedError,
        TransferIsInQueue: CreateTransferFileTransferIsInQueueError,
        NotFound: CreateTransferFileNotFoundError,
        Conflict: CreateTransferFileConflictError,
        InternalServerError: CreateTransferFileInternalServerError,
        BadGateway: CreateTransferFileBadGatewayError,
        GatewayTimeout: CreateTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFilePartError: {
        BadRequest: CreateTransferFilePartBadRequestError,
        Unauthorized: CreateTransferFilePartUnauthorizedError,
        TransferAlreadyLocked: CreateTransferFilePartTransferAlreadyLockedError,
        FileAlreadyLocked: CreateTransferFilePartFileAlreadyLockedError,
        NotFound: CreateTransferFilePartNotFoundError,
        InternalServerError: CreateTransferFilePartInternalServerError,
        BadGateway: CreateTransferFilePartBadGatewayError,
        GatewayTimeout: CreateTransferFilePartGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferFilePartsError: {
        BadRequest: CreateTransferFilePartsBadRequestError,
        Unauthorized: CreateTransferFilePartsUnauthorizedError,
        TransferAlreadyLocked: CreateTransferFilePartsTransferAlreadyLockedError,
        FileAlreadyLocked: CreateTransferFilePartsFileAlreadyLockedError,
        NotFound: CreateTransferFilePartsNotFoundError,
        InternalServerError: CreateTransferFilePartsInternalServerError,
        BadGateway: CreateTransferFilePartsBadGatewayError,
        GatewayTimeout: CreateTransferFilePartsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    CreateTransferSignedUrlsError: {
        BadRequest: CreateTransferSignedUrlsBadRequestError,
        Unauthorized: CreateTransferSignedUrlsUnauthorizedError,
        PasswordDoesNotMatch: CreateTransferSignedUrlsPasswordDoesNotMatchError,
        NotFound: CreateTransferSignedUrlsNotFoundError,
        InternalServerError: CreateTransferSignedUrlsInternalServerError,
        BadGateway: CreateTransferSignedUrlsBadGatewayError,
        GatewayTimeout: CreateTransferSignedUrlsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteReportError: {
        BadRequest: DeleteReportBadRequestError,
        Unauthorized: DeleteReportUnauthorizedError,
        TransferNotUploaded: DeleteReportTransferNotUploadedError,
        NotFound: DeleteReportNotFoundError,
        InternalServerError: DeleteReportInternalServerError,
        BadGateway: DeleteReportBadGatewayError,
        GatewayTimeout: DeleteReportGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTeamTransferError: {
        BadRequest: DeleteTeamTransferBadRequestError,
        Unauthorized: DeleteTeamTransferUnauthorizedError,
        TransferNotUploaded: DeleteTeamTransferTransferNotUploadedError,
        NotFound: DeleteTeamTransferNotFoundError,
        InternalServerError: DeleteTeamTransferInternalServerError,
        BadGateway: DeleteTeamTransferBadGatewayError,
        GatewayTimeout: DeleteTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTransferError: {
        BadRequest: DeleteTransferBadRequestError,
        Unauthorized: DeleteTransferUnauthorizedError,
        TransferNotUploaded: DeleteTransferTransferNotUploadedError,
        NotFound: DeleteTransferNotFoundError,
        InternalServerError: DeleteTransferInternalServerError,
        BadGateway: DeleteTransferBadGatewayError,
        GatewayTimeout: DeleteTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteTransferFileError: {
        BadRequest: DeleteTransferFileBadRequestError,
        Unauthorized: DeleteTransferFileUnauthorizedError,
        NotFound: DeleteTransferFileNotFoundError,
        InternalServerError: DeleteTransferFileInternalServerError,
        BadGateway: DeleteTransferFileBadGatewayError,
        GatewayTimeout: DeleteTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteUserTransferError: {
        BadRequest: DeleteUserTransferBadRequestError,
        Unauthorized: DeleteUserTransferUnauthorizedError,
        TransferNotUploaded: DeleteUserTransferTransferNotUploadedError,
        NotFound: DeleteUserTransferNotFoundError,
        InternalServerError: DeleteUserTransferInternalServerError,
        BadGateway: DeleteUserTransferBadGatewayError,
        GatewayTimeout: DeleteUserTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetMetricStatisticError: {
        BadRequest: GetMetricStatisticBadRequestError,
        Unauthorized: GetMetricStatisticUnauthorizedError,
        InternalServerError: GetMetricStatisticInternalServerError,
        BadGateway: GetMetricStatisticBadGatewayError,
        GatewayTimeout: GetMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetReportError: {
        BadRequest: GetReportBadRequestError,
        Unauthorized: GetReportUnauthorizedError,
        NotFound: GetReportNotFoundError,
        InternalServerError: GetReportInternalServerError,
        BadGateway: GetReportBadGatewayError,
        GatewayTimeout: GetReportGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamMetricStatisticError: {
        BadRequest: GetTeamMetricStatisticBadRequestError,
        Unauthorized: GetTeamMetricStatisticUnauthorizedError,
        InternalServerError: GetTeamMetricStatisticInternalServerError,
        BadGateway: GetTeamMetricStatisticBadGatewayError,
        GatewayTimeout: GetTeamMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferError: {
        BadRequest: GetTeamTransferBadRequestError,
        Unauthorized: GetTeamTransferUnauthorizedError,
        NotFound: GetTeamTransferNotFoundError,
        InternalServerError: GetTeamTransferInternalServerError,
        BadGateway: GetTeamTransferBadGatewayError,
        GatewayTimeout: GetTeamTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferFileError: {
        BadRequest: GetTeamTransferFileBadRequestError,
        Unauthorized: GetTeamTransferFileUnauthorizedError,
        Forbidden: GetTeamTransferFileForbiddenError,
        NotFound: GetTeamTransferFileNotFoundError,
        InternalServerError: GetTeamTransferFileInternalServerError,
        BadGateway: GetTeamTransferFileBadGatewayError,
        GatewayTimeout: GetTeamTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamTransferQueueError: {
        BadRequest: GetTeamTransferQueueBadRequestError,
        Unauthorized: GetTeamTransferQueueUnauthorizedError,
        NotFound: GetTeamTransferQueueNotFoundError,
        InternalServerError: GetTeamTransferQueueInternalServerError,
        BadGateway: GetTeamTransferQueueBadGatewayError,
        GatewayTimeout: GetTeamTransferQueueGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamUserMetricStatisticError: {
        BadRequest: GetTeamUserMetricStatisticBadRequestError,
        Unauthorized: GetTeamUserMetricStatisticUnauthorizedError,
        InternalServerError: GetTeamUserMetricStatisticInternalServerError,
        BadGateway: GetTeamUserMetricStatisticBadGatewayError,
        GatewayTimeout: GetTeamUserMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferError: {
        BadRequest: GetTransferBadRequestError,
        Unauthorized: GetTransferUnauthorizedError,
        NotFound: GetTransferNotFoundError,
        InternalServerError: GetTransferInternalServerError,
        BadGateway: GetTransferBadGatewayError,
        GatewayTimeout: GetTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferFileError: {
        BadRequest: GetTransferFileBadRequestError,
        Unauthorized: GetTransferFileUnauthorizedError,
        NotFound: GetTransferFileNotFoundError,
        InternalServerError: GetTransferFileInternalServerError,
        BadGateway: GetTransferFileBadGatewayError,
        GatewayTimeout: GetTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferFilePreviewError: {
        BadRequest: GetTransferFilePreviewBadRequestError,
        Unauthorized: GetTransferFilePreviewUnauthorizedError,
        PasswordDoesNotMatch: GetTransferFilePreviewPasswordDoesNotMatchError,
        NotFound: GetTransferFilePreviewNotFoundError,
        InternalServerError: GetTransferFilePreviewInternalServerError,
        BadGateway: GetTransferFilePreviewBadGatewayError,
        GatewayTimeout: GetTransferFilePreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferPreviewError: {
        BadRequest: GetTransferPreviewBadRequestError,
        Unauthorized: GetTransferPreviewUnauthorizedError,
        PasswordDoesNotMatch: GetTransferPreviewPasswordDoesNotMatchError,
        InvalidEmail: GetTransferPreviewInvalidEmailError,
        NotFound: GetTransferPreviewNotFoundError,
        InternalServerError: GetTransferPreviewInternalServerError,
        BadGateway: GetTransferPreviewBadGatewayError,
        GatewayTimeout: GetTransferPreviewGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTransferQueueError: {
        BadRequest: GetTransferQueueBadRequestError,
        Unauthorized: GetTransferQueueUnauthorizedError,
        NotFound: GetTransferQueueNotFoundError,
        InternalServerError: GetTransferQueueInternalServerError,
        BadGateway: GetTransferQueueBadGatewayError,
        GatewayTimeout: GetTransferQueueGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserMetricStatisticError: {
        BadRequest: GetUserMetricStatisticBadRequestError,
        Unauthorized: GetUserMetricStatisticUnauthorizedError,
        InternalServerError: GetUserMetricStatisticInternalServerError,
        BadGateway: GetUserMetricStatisticBadGatewayError,
        GatewayTimeout: GetUserMetricStatisticGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserTransferError: {
        BadRequest: GetUserTransferBadRequestError,
        Unauthorized: GetUserTransferUnauthorizedError,
        NotFound: GetUserTransferNotFoundError,
        InternalServerError: GetUserTransferInternalServerError,
        BadGateway: GetUserTransferBadGatewayError,
        GatewayTimeout: GetUserTransferGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserTransferFileError: {
        BadRequest: GetUserTransferFileBadRequestError,
        Unauthorized: GetUserTransferFileUnauthorizedError,
        NotFound: GetUserTransferFileNotFoundError,
        InternalServerError: GetUserTransferFileInternalServerError,
        BadGateway: GetUserTransferFileBadGatewayError,
        GatewayTimeout: GetUserTransferFileGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
};
