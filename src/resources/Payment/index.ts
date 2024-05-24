import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IPaymentLog, IPaymentResponseData } from "./interface";

class Payment {

    constructor(private apiService: APIService) { }

    getAllLogs(options: IFetchOptions, data?: any) {
        return this.apiService.post<IPaymentResponseData>({ url: apiURLs.payment.log, options, data })
    }



}


export const paymentService = new Payment(apiService)