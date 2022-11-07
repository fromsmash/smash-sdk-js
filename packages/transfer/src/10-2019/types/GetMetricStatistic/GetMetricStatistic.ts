export interface GetMetricStatisticInput {
    metricName: string;
    statisticName: string;
    startDate?: number;
    endDate?: number;
    unit?: string;
}

export interface GetMetricStatisticOutput {
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
