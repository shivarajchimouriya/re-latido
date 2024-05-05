import { queryKeys } from "@/constants/keys"
import { API } from "@/resources"
import { useQuery } from "@tanstack/react-query"


const getCategories = () => {
    return API.Homepage.get()
}


export const useCategories = () => {

    return useQuery({
        queryKey: [queryKeys.CATEGORIES],
        queryFn: getCategories,
        select(data) {
            return data.data.category
        },
    })


}