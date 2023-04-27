export interface GetSubscriptionInput {}

export interface GetSubscriptionOutput {
    subscription: {
        plan: string;
        status: "Payment Required" | "Active" | "Pending" | "Inactive" | "Banned";
        endDate: string;
        provider: "Paypal" | "Stripe";
        startDate: string;
        automaticRenew: boolean;
        options: {
            services: {
                promotion: {
                    enabled: boolean;
                };
                customization: {
                    enabled: boolean;
                };
                iam: {
                    team: {
                        enabled: boolean;
                        max: number;
                    };
                    user: {
                        enabled: boolean;
                        max: number;
                    };
                };
                domain: {
                    enabled: boolean;
                    max: number;
                };
                transfer: {
                    transferSize: {
                        max: number;
                    };
                    accountUploadSize: {
                        period: string;
                        max: number;
                    }[];
                    teamUploadSize: {
                        period: string;
                        max: number;
                    }[];
                    userUploadSize: {
                        period: string;
                        max: number;
                    }[];
                    accountStorageSize: {
                        period: string;
                        max: number;
                    }[];
                    teamStorageSize: {
                        period: string;
                        max: number;
                    }[];
                    userStorageSize: {
                        period: string;
                        max: number;
                    }[];
                    accountTransfersCount: {
                        period: string;
                        max: number;
                    }[];
                    teamTransfersCount: {
                        period: string;
                        max: number;
                    }[];
                    userTransfersCount: {
                        period: string;
                        max: number;
                    }[];
                    teamActiveUsers: {
                        period: string;
                        max: number;
                    }[];
                    transferSizeDelay: {
                        lowValue: number;
                        highValue: number;
                        factor: number;
                        offset: number;
                    }[];
                    receivers: {
                        enabled: boolean;
                        active: boolean;
                        max: number;
                    };
                    accountActiveUsers: {
                        period: string;
                        max: number;
                    }[];
                    metrics: {
                        dashboard: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        transfers: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        files: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        bytesUploaded: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        activeUsers: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        activeGuests: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                        totalActiveUsers: {
                            enabled: boolean;
                            configurable: boolean;
                            active: boolean;
                        };
                    };
                    transferAvailabilityDuration: {
                        enabled: boolean;
                        configurable: boolean;
                        active: boolean;
                        max: number;
                        min: number;
                        default: number;
                    };
                    password: {
                        required: boolean;
                        configurable: boolean;
                        enabled: boolean;
                        active: boolean;
                        match: string;
                        minLength: number;
                    };
                    accessTracking: {
                        enabled: boolean;
                        configurable: boolean;
                        active: boolean;
                        default: boolean;
                        options: {
                            none: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                            email: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                        };
                    };
                    delivery: {
                        enabled: boolean;
                        configurable: boolean;
                        active: boolean;
                        default: boolean;
                        options: {
                            email: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                            link: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                        };
                    };
                    notificationType: {
                        enabled: boolean;
                        configurable: boolean;
                        active: boolean;
                        default: boolean;
                        options: {
                            all: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                            none: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                        };
                    };
                    preview: {
                        enabled: boolean;
                        configurable: boolean;
                        active: boolean;
                        default: boolean;
                        options: {
                            full: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                            none: {
                                label: string;
                                enabled: boolean;
                                active: boolean;
                            };
                        };
                    };
                    customization: {
                        active: boolean;
                        configurable: boolean;
                        enabled: boolean;
                    };
                    promotion: {
                        active: boolean;
                        configurable: boolean;
                        enabled: boolean;
                    };
                };
                download: {
                    accountDownloadSize: {
                        factor: number;
                        lowValue: number;
                        highValue: number;
                    }[];
                    teamDownloadSize: {
                        factor: number;
                        lowValue: number;
                        highValue: number;
                    }[];
                    userDownloadSize: {
                        factor: number;
                        lowValue: number;
                        highValue: number;
                    }[];
                    transferDownloadSize: {
                        factor: number;
                        lowValue: number;
                        highValue: number;
                    }[];
                };
            };
        };
    };
}
