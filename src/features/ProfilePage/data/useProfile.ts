import { queryKeys } from "@/constants/keys"
import { useGetTokens } from "@/hooks/client/useGetToken"
import { API } from "@/resources"
import { IUserProfile } from "@/resources/User/interface"
import { logger } from "@/utils/logger"
import { useMutation, useQuery } from "@tanstack/react-query"

const fetchProfile = async (token: string | null) => {

    return API.User.getProfile({ options: { headers: { Authorization: token ?? "" } } })

}

const updateProfile = async (token: string | null, profileData: Partial<IUserProfile>) => {
    logger.log("updateing with", profileData)

    return API.User.editProfile({ options: { headers: { Authorization: token ?? "" } } }, profileData)

}


export const useFetchProfile = () => {
    const { token } = useGetTokens()
    return useQuery({
        queryKey: [queryKeys.PROFILE],
        queryFn: () => fetchProfile(token),
        retry: 1,
        enabled: !!token


    })

}


export const useUpdateProfile = () => {
    const { token } = useGetTokens()
    return useMutation({
        mutationKey: [queryKeys.PROFILE],
        mutationFn: (data: Partial<IUserProfile>) => updateProfile(token, data),
        retry: 0,



    })

}


