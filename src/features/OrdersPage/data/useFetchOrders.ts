import { queryKeys } from "@/constants/keys"
import { useGetTokens } from "@/hooks/client/useGetToken"
import { API } from "@/resources"
import { useQuery } from "@tanstack/react-query"

const fetchOrders = (token: string | null) => {
    return API.Order.getAll({ params: { limit: 10 }, options: { headers: { Authorization: token ?? "" } } })

}


export const useFetchOrders = () => {
    const { token } = useGetTokens()

    return useQuery({
        queryKey: [queryKeys.ORDERS],
        queryFn: () => fetchOrders(token),
        enabled: !!token
    })
}