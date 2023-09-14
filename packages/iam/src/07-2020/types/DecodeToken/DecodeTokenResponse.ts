import { DecodeTokenOutput } from "./DecodeToken";
import {  FailedToDecodeTokenError } from "./DecodeTokenError";

export type DecodeTokenResponse = DecodeTokenOutput | FailedToDecodeTokenError;
