import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IOrderResponseData } from "./interface";

class Order {

    constructor(private apiService: APIService) { }



    getAll(options: IFetchOptions) {

        return this.apiService.get<IOrderResponseData>({ url: apiURLs.order, options })

    }

}

export const orderService = new Order(apiService)