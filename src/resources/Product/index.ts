import { apiURLs } from "@/constants/apiUrls";
import { APIService, apiService } from "@/lib/requester";
import { IProduct, IProductResponse } from "./interface";

class Product {

    constructor(private apiService: APIService) {

    }


    getAll() {

        return this.apiService.get<IProductResponse>({ url: apiURLs.product.all })

    }


};
export const productService = new Product(apiService)