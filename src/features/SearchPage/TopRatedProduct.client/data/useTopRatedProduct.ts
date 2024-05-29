import { queryKeys } from "@/constants/keys"
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { useQuery } from "@tanstack/react-query"

interface IReq {
    keyword: string;
    gender: string;
}

const getTopRatedProduct = async ({ keyword, gender }: IReq) => {
    try {
        const res = await API.Product.getTopRated({
            params: { search: keyword, gender, limit: 100, page: 1 }
        });
        return res;
    } catch (error) {
        logger.log("Error ", error);
    }
};


export const useTopRatedProduct = (keyword: string, gender: string) => {

    return useQuery({
        queryKey: [queryKeys.TOP_RATED, keyword, gender],
        queryFn: () => getTopRatedProduct({ gender, keyword })
    })

}