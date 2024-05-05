import { logger } from "@/utils/logger"
import { APPError } from "../exception";
export interface IAPIError {
    status: number;
    data: any;
    message: string;
}
interface IFetchRequest {
    get: <T>(options: IApiRequestOptions) => Promise<T>
    post: <T>(options: IApiRequestOptions) => Promise<T>
    put: <T>(options: IApiRequestOptions) => Promise<T>
    patch: <T>(options: IApiRequestOptions) => Promise<T>
    delete: <T>(options: IApiRequestOptions) => Promise<T>
}


export interface BaseRequestInterface {
    data?: any,
    // only used with POST/PUT/PATCH methods. If not specified, no request body will be sent.
    options?: IFetchOptions
    url: string,
}

export interface IFetchOptions {
    params?: Record<string, any>,
    options?: RequestInit,
    data?: any,
    baseURL?: string

}

export interface RequestInterfaceClient {
    url: string,
    options?: IFetchOptions,
    data?: any,
}



export interface IApiRequestOptions extends BaseRequestInterface {


    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',  // default is GET
}
const isServer = typeof window === "undefined";

interface IPrepareURL {
    url?: string,
    params?: Record<string, any>,
    baseURL?: string

}




export class APIService implements IFetchRequest {
    baseURL: string = ''
    private static instance: APIService;
    constructor() {
        const baseurl = isServer ? process.env.API_URL as string : process.env.NEXT_PUBLIC_API_URL as string
        this.setBaseURL(baseurl)
    }

    public getInstance(): APIService {
        if (!APIService.instance) {
            APIService.instance = new APIService();
        }

        return APIService.instance;
    }


    setBaseURL(baseURL: string) {
        this.baseURL = baseURL
    }





    private async handleError(err: Response) {
        const error = { data: await err.json() }
        logger.prod("Errrorr   🔥🔥🔥🔥🔥🔥🔥🔥🔥 ", err)
        let errorResponse = {
            status: err.status,
            data: error,
            message: "Request failed",
        } as IAPIError;








        if (err.status >= 400 && err.status < 500) {

            errorResponse = {
                status: err.status,
                data: error,
                message: "bad request",
            }
        }

        else if (err.status >= 500 && err.status < 600) {
            errorResponse = {
                status: err.status,
                data: error,
                message: "server error",
            }

        }


        throw new APPError(errorResponse);

    }

    private async responseHandeler<T>(res: Response): Promise<T> {
        logger.prod("API response 💡💡💡💡 ", res.status)
        if (!res.ok || res.status >= 400 && res.status < 600) {

            await this.handleError(res)

        }



        const data = await res.json();
        logger.prod("Success  ✅✅✅✅✅✅✅")



        return data

    }



    private prepareUrl({ baseURL, params, url }: IPrepareURL): string {

        if (baseURL) {
            this.setBaseURL(baseURL)
        }

        let apiUrl = this.baseURL + url;
        if (!params) {
            return apiUrl;
        }
        if (Object.entries(params).length > 0) {
            Object.entries(params).forEach((param) => {
                apiUrl += `${apiUrl.includes('?') ? '&' : '?'}${param[0]}=${param[1]}`;
            });
        }


        return apiUrl;
    }

    private async fetchWrapper<T>({ options, url, data, method }: IApiRequestOptions): Promise<T> {   //alll the CRUD requests go via this function and request interceptions are handeled here
        const apiUrl = this.prepareUrl({ baseURL: options?.baseURL, params: options?.params, url });
        logger.prod("API URL  🚀🚀🚀🚀🚀", apiUrl);

        const res = await fetch(apiUrl, {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            ...options?.options
        });
        return this.responseHandeler(res)
    }



    async get<T>({ options, url }: RequestInterfaceClient): Promise<T> {

        logger.log('get options', options)
        const res = await this.fetchWrapper<T>({ url, data: undefined, options: { options: { next: {} }, ...options, }, method: "GET", });
        return res
    }

    async post<T>({ options, url, data }: RequestInterfaceClient): Promise<T> {
        const res = await this.fetchWrapper<T>({ url, options, method: "POST", data });
        return res
    }
    async put<T>({ options, url, data }: RequestInterfaceClient): Promise<T> {
        const res = await this.fetchWrapper<T>({ url, options, method: "PUT", data });
        return res
    };
    async patch<T>({ options, url, data }: RequestInterfaceClient): Promise<T> {
        const res = await this.fetchWrapper<T>({ url, options, method: "PATCH", data });
        return res
    }
    async delete<T>({ options, url, data }: RequestInterfaceClient): Promise<T> {
        const res = await this.fetchWrapper<T>({ url, options, method: "DELETE", data });
        return res
    }


}
export const apiService = new APIService().getInstance()