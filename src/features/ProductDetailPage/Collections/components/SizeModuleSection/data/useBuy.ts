import { API } from "@/resources"
import { useMutation } from "@tanstack/react-query"
 



export const useBuy = () => {
    return useMutation({
        mutationKey: ['buy'],
    })
}