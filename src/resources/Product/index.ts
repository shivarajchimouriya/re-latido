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
  constructor(private apiService: APIService) { }

  getAll(options?: IFetchOptions) {
    return this.apiService.get<IProductResponse>({ url: apiURLs.product.all, options });
  }
  byCategory(id: string, options: IFetchOptions) {
    return this.apiService.get<IResponseProductByCategory>({
      url: apiURLs.category.byId(id),
      options
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
