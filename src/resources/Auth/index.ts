import { apiURLs } from "@/constants/apiUrls";
import { APIService, IApiRequestOptions, IFetchOptions, apiService } from "@/lib/requester";

class Auth {


    constructor(private apiService: APIService) { }

    checkUser(options: IFetchOptions) {

        return this.apiService.get({ url: apiURLs.auth.checkUser, options: options })

    }

}

export const authSevice = new Auth(apiService)