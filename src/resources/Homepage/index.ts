import { apiURLs } from "@/constants/apiUrls";
import { APIService, apiService } from "@/lib/requester";
import { IHomepageResponse } from "./interface";

class Homepage {

    constructor(private apiService: APIService) {



    }

    get() {

        return this.apiService.get<IHomepageResponse>({ url: apiURLs.homepage })

    }





}

export const homepageService = new Homepage(apiService)