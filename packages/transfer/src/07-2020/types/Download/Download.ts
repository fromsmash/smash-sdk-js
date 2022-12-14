export interface DownloadInput {
  url: string;
}

export interface DownloadOutput {
  stream: NodeJS.ReadableStream,
  size: number;
  fileName: string;
}