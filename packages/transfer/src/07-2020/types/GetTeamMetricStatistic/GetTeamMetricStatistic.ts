export interface GetTeamMetricStatisticInput {
    team: string;
    metricName: string;
    statisticName: string;
    startDate?: number;
    endDate?: number;
    unit?: string;
}

export interface GetTeamMetricStatisticOutput {
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
