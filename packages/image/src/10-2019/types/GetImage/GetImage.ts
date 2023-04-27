export interface GetImageInput {
    imageId: string;
}

export interface GetImageOutput {
    image: {
        id: string;
        uploadUrl: string;
        downloadUrl: string;
        expireAt: string;
    };
}
