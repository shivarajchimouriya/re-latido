import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IInvoiceResponse } from "./interface";

class Invoice {
  constructor(private apiService: APIService) {}

  getById(id: string, options?: IFetchOptions) {
    return this.apiService.get<IInvoiceResponse>({
      url: apiURLs.invoiceDetails.byId(id),
      options,
    });
  }
}
export const invoiceService = new Invoice(apiService);
