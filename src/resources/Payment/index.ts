import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IPaymentLog } from "./interface";

class Payment {

    constructor(private apiService: APIService) { }

    getAllLogs(options: IFetchOptions, data?: any) {
        return this.apiService.post<IPaymentLog>({ url: apiURLs.payment.log, options, data })
    }



}


export const paymentService = new Payment(apiService)