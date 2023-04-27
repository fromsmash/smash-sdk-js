export interface CreateImageInput {
    ttl?: number;
}

export interface CreateImageOutput {
    image: {
        id: string;
        uploadUrl: string;
        downloadUrl: string;
        expireAt: string;
    };
}
