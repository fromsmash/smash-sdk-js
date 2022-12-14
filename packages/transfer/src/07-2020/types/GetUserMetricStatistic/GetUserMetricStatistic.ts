export interface GetUserMetricStatisticInput {
    userId: string;
    metricName: string;
    statisticName: string;
    startDate?: string;
    endDate?: string;
    unit?: string;
}

export interface GetUserMetricStatisticOutput {
    statistic: {
        metricName: string;
        statisticName: string;
        unit: string;
        data: {
            value: number;
            date: string;
        }[];
    };
}
