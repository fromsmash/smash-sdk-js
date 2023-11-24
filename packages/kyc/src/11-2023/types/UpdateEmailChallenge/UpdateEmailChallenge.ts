export interface UpdateEmailChallengeInput {
    email: string;
    token: number;
}

export interface UpdateEmailChallengeOutput {
    emailChallenge: {
        email: string;
        status: "Clean" | "Dirty";
    };
}
