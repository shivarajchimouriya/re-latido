import { apiURLs } from "@/constants/apiUrls";
import { APIService, apiService } from "@/lib/requester";
import { IProduct, IProductFilterReq, IProductResponse, IResponseProductByCategory, IResposneFIlteredProduct } from "./interface";

class Product {

    constructor(private apiService: APIService) { }

    getAll() {
        return this.apiService.get<IProductResponse>({ url: apiURLs.product.all })

    }
    byCategory(id: string) {
        return this.apiService.get<IResponseProductByCategory>({ url: apiURLs.product.byId(id) })

    }
    filter(filter: IProductFilterReq) {
        return this.apiService.get<IResposneFIlteredProduct>({ url: apiURLs.filter, options: { params: { ...filter } } })
    }


};
export const productService = new Product(apiService)