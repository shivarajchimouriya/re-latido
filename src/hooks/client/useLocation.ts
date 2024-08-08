import { APPError } from "@/lib/exception";
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';

export default function useLocation() {
    const api = "https://api.country.is/";
    interface IGeo {
        country: string,
    }
    async function fetchAPI() {

        const res = await fetch(api);
        if (res.ok) {
            const data: IGeo = await res.json();
            return data

        }
        else {
            throw new APPError({ data: res, message: "something went wrong", status: res.status })
        }


    }

    const { data, isLoading, refetch, error } = useQuery({
        queryFn: () => fetchAPI(),
        queryKey: ["Location"],
    })

    return { country: data?.country, error, isLoading };

}
