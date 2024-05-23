import { queryKeys } from "@/constants/keys"
import { API } from "@/resources"
import { useMutation } from "@tanstack/react-query"


const updateShipping = () => {
    return API.Shipping.updateShippingDetails({

    })


}


export const useUpdateShippingDetails = () => {


    return useMutation({
        mutationKey: [queryKeys.UPDATE_SHIPPING],
        mutationFn: updateShipping
    })


}