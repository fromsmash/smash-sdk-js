import { UploadProgressEvent } from "@smash-sdk/core";
export interface UploadTransferFilePartInput {
  url: string;
  content: string | Buffer | ArrayBuffer;
  onUploadProgress?: (event: UploadProgressEvent) => void;
}

export interface UploadTransferFilePartOutput {
  part: {
    etag: string;
    crc32: number;
  };
}
