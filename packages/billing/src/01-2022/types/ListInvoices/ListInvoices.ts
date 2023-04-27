export interface ListInvoicesInput {}

export interface ListInvoicesOutput {
    invoices: {
        account: string;
        id: string;
        vat: string;
        url: string;
        date: string;
        provider: "Paypal" | "Stripe";
        region:
            | "us-east-1"
            | "us-east-2"
            | "us-west-1"
            | "us-west-2"
            | "ap-south-1"
            | "ap-northeast-3"
            | "ap-northeast-2"
            | "ap-southeast-1"
            | "ap-southeast-2"
            | "ap-northeast-1"
            | "ca-central-1"
            | "eu-central-1"
            | "eu-west-1"
            | "eu-west-2"
            | "eu-west-3"
            | "eu-north-1"
            | "sa-east-1"
            | "af-south-1"
            | "ap-east-1"
            | "ap-south-2"
            | "ap-southeast-3"
            | "eu-south-1"
            | "eu-south-2"
            | "eu-central-2"
            | "me-south-1"
            | "me-central-1";
        amount: number;
        status: "Pending" | "Available";
        number: number;
        created: string;
        percent: number;
        vatRule: "Vat Not Applicable" | "Vat Applicable" | "Reverse Charge" | "Mini One Stop Shop";
        charge: {
            id: string;
            created: string;
            customer: string;
        };
        refund: {
            id: string;
            created: string;
        };
        informations: {
            country: string;
            countryCode: string;
            lastName: string;
            firstName: string;
            vatNumber: string;
            city: string;
            address: string;
            company: string;
            zipCode: string;
        };
        priceInclTax: number;
        priceExclTax: number;
        refundInvoice: string;
        subscription: {
            plan: string;
            endDate: string;
            provider: "Paypal" | "Stripe";
            startDate: string;
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
        plan: {
            name: string;
            currency: "eur" | "usd";
            duration: string;
            description: string;
            maxActiveUser: number;
            paymentMethods?: {
                stripeCard: {
                    enabled: boolean;
                };
                stripeSepa: {
                    enabled: boolean;
                };
                paypal: {
                    enabled: boolean;
                };
            };
        };
    }[];
}
