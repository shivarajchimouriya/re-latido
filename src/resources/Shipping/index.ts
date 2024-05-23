import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IShippingDetails } from "./interface";

class Shipping {
  constructor(private apiService: APIService) { }


  getShippingDetails(options: IFetchOptions, data?: any) {

    return this.apiService.post<Partial<IShippingDetails>>({ url: apiURLs.order, options, data })

  }
  updateShippingDetails(options: IFetchOptions, data?: any) {


    return this.apiService.patch({ url: apiURLs.order, options, data })


  }


}

export const shippingService = new Shipping(apiService)