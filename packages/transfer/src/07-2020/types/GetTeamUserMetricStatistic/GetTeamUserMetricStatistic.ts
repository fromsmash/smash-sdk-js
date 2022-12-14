export interface GetTeamUserMetricStatisticInput {
    teamId: string;
    userId: string;
    metricName: string;
    statisticName: string;
    startDate?: string;
    endDate?: string;
    unit?: string;
}

export interface GetTeamUserMetricStatisticOutput {
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
