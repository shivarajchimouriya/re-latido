import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import {
  IBuyRespose,
  IOrderData,
  IOrderResponseData,
} from "./interface";
import { OrderRequestDTO } from "@/features/ProductDetailPage/Collections/components/SizeModuleSection/DTO";

class Order {
  constructor(private apiService: APIService) { }

  getAll(options: IFetchOptions) {
    return this.apiService.get<IOrderResponseData>({
      url: apiURLs.order,
      options,
    });
  }

  createOrder(options: IFetchOptions, data: Partial<OrderRequestDTO>) {
    return this.apiService.post<IBuyRespose>({
      url: apiURLs.order,
      options,
      data,
    });
  }

  getById(orderID: string, options?: IFetchOptions) {
    return this.apiService.get<any>({
      url: apiURLs.orderById(orderID),
      options,
    });
  }
}

export const orderService = new Order(apiService);
