export interface ListManagedThemesPublicInput {}

export interface ListManagedThemesPublicOutput {
    themes: {
        id: string;
        created: string;
        modified: string;
        name?: string;
        status: "Draft" | "Published" | "Archived";
        target: "All" | "External" | "Internal";
        locations?: {
            type: "City" | "Country";
            name: string;
            voiceShare?: number;
            rule: "Include" | "Exclude";
        }[];
        periods?: {
            startDate: string;
            endDate: string;
            periodsOfDay?: {
                startTime: string;
                endTime: string;
            }[];
        }[];
        trackingMethods?: {
            impressionTag?: {
                iframe?: {
                    url: string;
                };
                script?: {
                    url: string;
                };
                pixel?: {
                    url: string;
                };
                noscript?: {
                    url: string;
                };
            };
            clickTag?: {
                url: string;
            };
        };
        desktop?: {
            teasing?: {
                headerLogo?: {
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                headerUrl?: {
                    default: string;
                    [key: string]: string;
                };
                centralLogo?: {
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                headerText?: {
                    default: string;
                    [key: string]: string;
                };
                background?: {
                    type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
            };
            reveal?: {
                teasing?: {
                    text?: {
                        default: string;
                        [key: string]: string;
                    };
                    background?: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        url: {
                            default: string;
                            [key: string]: string;
                        };
                    };
                };
                text?: {
                    default: string;
                    [key: string]: string;
                };
                callToAction?: {
                    label: {
                        default: string;
                        [key: string]: string;
                    };
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                medias?: {
                    default: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        position: number;
                        url: string;
                    }[];
                    [key: string]: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        position: number;
                        url: string;
                    }[];
                };
            };
            trackingMethods?: {
                impressionTag?: {
                    iframe?: {
                        url: string;
                    };
                    script?: {
                        url: string;
                    };
                    pixel?: {
                        url: string;
                    };
                    noscript?: {
                        url: string;
                    };
                };
                clickTag?: {
                    url: string;
                };
            };
        };
        mobile?: {
            teasing?: {
                headerLogo?: {
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                headerUrl?: {
                    default: string;
                    [key: string]: string;
                };
                centralLogo?: {
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                headerText?: {
                    default: string;
                    [key: string]: string;
                };
                background?: {
                    type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
            };
            reveal?: {
                teasing?: {
                    text?: {
                        default: string;
                        [key: string]: string;
                    };
                    background?: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        url: {
                            default: string;
                            [key: string]: string;
                        };
                    };
                };
                text?: {
                    default: string;
                    [key: string]: string;
                };
                callToAction?: {
                    label: {
                        default: string;
                        [key: string]: string;
                    };
                    url: {
                        default: string;
                        [key: string]: string;
                    };
                };
                medias?: {
                    default: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        position: number;
                        url: string;
                    }[];
                    [key: string]: {
                        type: "Image" | "Youtube" | "Vimeo" | "Iframe";
                        position: number;
                        url: string;
                    }[];
                };
            };
            trackingMethods?: {
                impressionTag?: {
                    iframe?: {
                        url: string;
                    };
                    script?: {
                        url: string;
                    };
                    pixel?: {
                        url: string;
                    };
                    noscript?: {
                        url: string;
                    };
                };
                clickTag?: {
                    url: string;
                };
            };
        };
    }[];
}
