import { APIService, apiService } from "@/lib/requester";

class Category {


    constructor(private apiService: APIService) {

    }

    getAll() {

    }



}
export const categoryService = new Category(apiService)