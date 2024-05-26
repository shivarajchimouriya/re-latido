export interface IServerResponse {
    PRN: string;
    PID: string;
    PS: string;
    RC: string;
    DV: string;
    UID: string;
    BC: string;
    INI: string;
    P_AMT: string;
    R_AMT: string;
}

export interface IPaymentRequestDTO {
    checkout_id: string;
    order: string;
    serverResponse: IServerResponse;
}