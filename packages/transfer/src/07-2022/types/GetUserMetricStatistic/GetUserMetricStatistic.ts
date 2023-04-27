export interface GetUserMetricStatisticInput {
    userId: string;
    metricName: "transfers" | "files" | "bytesUploaded" | "bytesDownloaded" | "activeUsers" | "activeGuests" | "totalActiveUsers" | "downloads" | "fileDownloads" | "transferDownloads";
    statisticName: "count" | "sum" | "average";
    startDate?: string;
    endDate?: string;
    unit?: "day" | "week" | "month" | "year";
}

export interface GetUserMetricStatisticOutput {
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
