export interface GetMetricStatisticInput {
    metricName: "transfers" | "files" | "bytesUploaded" | "bytesDownloaded" | "activeUsers" | "activeGuests" | "totalActiveUsers" | "downloads" | "fileDownloads" | "transferDownloads";
    statisticName: "count" | "sum" | "average";
    startDate?: string;
    endDate?: string;
    unit?: "day" | "week" | "month" | "year";
}

export interface GetMetricStatisticOutput {
    statistic: {
        metricName: "transfers" | "files" | "bytesUploaded" | "bytesDownloaded" | "activeUsers" | "activeGuests" | "totalActiveUsers" | "downloads" | "fileDownloads" | "transferDownloads";
        statisticName: "count" | "sum" | "average";
        unit: "day" | "week" | "month" | "year";
        data: {
            value: number;
            date: string;
        }[];
    };
}
