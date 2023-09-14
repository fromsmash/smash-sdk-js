import { Client, ClientParameters, ServiceType } from "@smash-sdk/core";
import { errors } from "./errors";
import jwtDecode from 'jwt-decode';
import { FailedToDecodeTokenError } from "./types/DecodeToken/DecodeTokenError";
import { DecodeTokenOutput, TokenData } from "./types/DecodeToken/DecodeToken";

export class ExtendedIam extends Client {

    public errors = errors;

    constructor(params: ClientParameters & { service: string, type: ServiceType, userAgent: string }) {
        super(params);
    }

    decodeToken(token: string): Promise<DecodeTokenOutput> {
        return new Promise((resolve, reject) => {
            try {
                const {
                    id,
                    username,
                    region,
                    ip,
                    scope,
                    account,
                    iat: issuedAt,
                    exp: expiration,
                } = jwtDecode(token) as TokenData;
                resolve({
                    id,
                    username,
                    region,
                    ip,
                    scope,
                    account,
                    issuedAt: new Date(issuedAt * 1000).toISOString(),
                    expiration: new Date(expiration * 1000).toISOString(),
                });
            } catch (error: unknown) {
                reject(new FailedToDecodeTokenError(error as Error));
            }
        });
    }
}