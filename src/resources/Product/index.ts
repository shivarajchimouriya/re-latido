import { apiURLs } from "@/constants/apiUrls";
import {
  APIService,
  IFetchOptions,
  apiService,
} from "@/lib/requester";
import {
  IProductDetailResponse,
  IProductFilterReq,
  IProductResponse,
  IResponseProductByCategory,
  IResposneFIlteredProduct,
  ISearchResponse,
} from "./interface";

class Product {
  constructor(private apiService: APIService) {}

  getAll() {
    return this.apiService.get<IProductResponse>({ url: apiURLs.product.all });
  }
  byCategory(id: string) {
    return this.apiService.get<IResponseProductByCategory>({
      url: apiURLs.product.byId(id),
    });
  }
  filter(filter: IProductFilterReq) {
    return this.apiService.get<IResposneFIlteredProduct>({
      url: apiURLs.filter,
      options: { params: { ...filter } },
    });
  }
  getTopRated(options: IFetchOptions) {
    return this.apiService.get<ISearchResponse>({
      url: apiURLs.search,
      options,
    });
  }
  byID(id: string) {
    return this.apiService.get<IProductDetailResponse>({
      url: apiURLs.product.byId(id),
    });
  }
}
export const productService = new Product(apiService);