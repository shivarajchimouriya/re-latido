import { mutationKeys } from "@/constants/keys"
import { API } from "@/resources";
import { useMutation } from "@tanstack/react-query"
import { ICheckUserReq } from "../DTO";



const checkUser = ({ username }: ICheckUserReq) => {
    return API.Auth.checkUser({
        params: { username: username }
    });
}


export const useUserrCheck = () => {


    return useMutation({
        mutationKey: [mutationKeys.CHECK_USER],
        mutationFn: checkUser
    })


}