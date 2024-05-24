import { queryKeys } from "@/constants/keys"
import { useGetTokens } from "@/hooks/client/useGetToken"
import { API } from "@/resources"
import { useMutation, useQuery } from "@tanstack/react-query"
import { IPaymentRequestDTO } from "../DTO"

const fetchPaymentLog = (token: string | null, data: IPaymentRequestDTO) => {

    return API.Payment.getAllLogs({ options: { headers: { Authorization: token ?? "" } } }, data)


}


export const usefetchPaymentLog = () => {


    return useMutation({
        mutationKey: [queryKeys.PAYMENT_LOG],
        mutationFn: ({ token, data }: { token: string | null, data: any }) => fetchPaymentLog(token, data),
        retry: 1
    })



}