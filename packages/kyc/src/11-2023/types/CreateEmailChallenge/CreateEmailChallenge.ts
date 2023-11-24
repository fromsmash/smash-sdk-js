export interface CreateEmailChallengeInput {
    email: string;
    language?: string;
}

export interface CreateEmailChallengeOutput {
    emailChallenge: {
        email: string;
        status: "Clean" | "Dirty";
    };
}
