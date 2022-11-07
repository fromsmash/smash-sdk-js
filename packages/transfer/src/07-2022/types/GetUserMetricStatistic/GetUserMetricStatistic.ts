export interface GetUserMetricStatisticInput {
    user: string;
    metricName: string;
    statisticName: string;
    startDate?: number;
    endDate?: number;
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
