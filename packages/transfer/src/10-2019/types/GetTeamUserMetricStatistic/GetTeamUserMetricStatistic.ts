export interface GetTeamUserMetricStatisticInput {
    team: string;
    user: string;
    metricName: string;
    statisticName: string;
    startDate?: number;
    endDate?: number;
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
