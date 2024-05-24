import { useGetTokens } from "@/hooks/client/useGetToken"
import { API } from "@/resources"
import { useMutation } from "@tanstack/react-query"
import { OrderRequestDTO } from "../DTO"
 
const createOrder = (token:string|null,data:Partial<OrderRequestDTO>) => {
    return API.Order.createOrder({options:{headers:{AUthorization:token?? ""}}},data)
}



export const useBuy = () => {

    return useMutation({
        mutationKey: ['buy'],
        mutationFn:( {data,token} :{token:string|null,data:Partial<OrderRequestDTO>})=> createOrder(token,data)
        

    })
}