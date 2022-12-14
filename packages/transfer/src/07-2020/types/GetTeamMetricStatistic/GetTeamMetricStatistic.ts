export interface GetTeamMetricStatisticInput {
    teamId: string;
    metricName: string;
    statisticName: string;
    startDate?: string;
    endDate?: string;
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
