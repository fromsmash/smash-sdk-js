export interface GetEmailChallengeInput {
    email: string;
}

export interface GetEmailChallengeOutput {
    emailChallenge: {
        email: string;
        status: "Clean" | "Dirty";
    };
}
