export interface GetMetricStatisticInput {
    metricName: string;
    statisticName: string;
    startDate?: string;
    endDate?: string;
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
