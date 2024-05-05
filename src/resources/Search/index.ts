import { apiURLs } from "@/constants/apiUrls";
import { APIService, apiService } from "@/lib/requester";
import { ISearchResponse } from "./interface";

class Search {


    constructor(private apiService: APIService) {

    }

    getResults() {

        return this.apiService.get<ISearchResponse>({ url: apiURLs.search })

    }




}



export const searchService = new Search(apiService)