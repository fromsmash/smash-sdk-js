export interface DecodeTokenInput {
  token: string;
}

export interface DecodeTokenOutput {
  id: string;
  username?: string;
  region: string;
  ip: string;
  scope?: "None" | "IP";
  account: string;
  issuedAt: string;
  expiration: string;
}

export interface TokenData {
	id: string;
	username?: string;
	region: string;
	ip: string;
	account: string;
  scope?: "None" | "IP";
	iat: number;
	exp: number;
}