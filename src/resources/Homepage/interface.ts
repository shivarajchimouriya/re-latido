import { ICategory } from "../Category/interface"
import { IProduct } from "../Product/interface"

export interface IHomepageResponse {
    data: {
        category: ICategory[],
        product: {
            data: IProduct[]
        }
    }


}