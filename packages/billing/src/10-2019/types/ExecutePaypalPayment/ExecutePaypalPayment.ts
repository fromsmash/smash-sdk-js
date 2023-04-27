export interface ExecutePaypalPaymentInput {
    token: string;
}

export interface ExecutePaypalPaymentOutput {
    payment: {
        status: "Success" | "Failure";
    };
}
