import { IOrderData } from "../Order/interface";

export interface IPaymentLog extends IOrderData { }

interface PaymentMeta {
    RU: string;
    PID: string;
    PRN: number;
    AMT: number;
    CRN: string;
    DT: string;
    R1: string;
    R2: string;
    MD: string;
    DV: string;
}

export interface IPaymentResponseData {
    message: string;
    data: {
        order: string[];
        serverResponse: any[];
        paymentMeta: PaymentMeta | PaymentMeta[];
        status: string;
        state: string;
        _id: string;
        checkout_id: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
}