import { apiURLs } from "@/constants/apiUrls";
import { APIService, IFetchOptions, apiService } from "@/lib/requester";
import { IHomepageResponse } from "./interface";

class Homepage {
  constructor(private apiService: APIService) {}

  get(data?: IFetchOptions) {
    return this.apiService.get<IHomepageResponse>({
      url: apiURLs.homepage,
      options: { data: data?.options, params: data?.params },
    });
  }
}

export const homepageService = new Homepage(apiService);
