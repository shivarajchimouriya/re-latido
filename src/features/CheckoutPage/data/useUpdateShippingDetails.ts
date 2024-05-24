import { queryKeys } from "@/constants/keys"
import { API } from "@/resources"
import { useMutation } from "@tanstack/react-query"


const updateShipping = (token: string, data: any) => {
    return API.Shipping.updateShippingDetails({
        options: { headers: { Authorization: token } }
    }, data)


}


export const useUpdateShippingDetails = () => {


    return useMutation({
        mutationKey: [queryKeys.UPDATE_SHIPPING],
        mutationFn: ({ token, data }: { token: string, data: any }) => updateShipping(token, data)
    })


}