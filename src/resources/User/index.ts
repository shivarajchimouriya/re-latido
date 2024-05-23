import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IProfileDataResponse } from "./interface";

class User {

    constructor(private apiService: APIService) { }

    getProfile(options: IFetchOptions) {

        return this.apiService.get<IProfileDataResponse>({ url: apiURLs.user.profile, options })
    }
    editProfile(options: IFetchOptions, data?: any) {
        return this.apiService.patch<IProfileDataResponse>({ url: apiURLs.user.profile, options, data })


    }


}


export const userService = new User(apiService)