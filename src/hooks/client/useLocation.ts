import { APPError } from "@/lib/exception";
import { useQuery } from "@tanstack/react-query";
import { apiURLs } from "@/constants/apiUrls"
import { getCookie } from 'cookies-next';
import { nextApiKeys } from "@/constants/keys"


interface ApiResponse {
    ip: string;
    country_code: string;
    country_name: string;
    region_name: string;
    city_name: string;
    latitude: number;
    longitude: number;
    zip_code: string;
    time_zone: string;
    asn: string;
    as: string;
    is_proxy: boolean;
}

export default function useLocation() {
    const apiUrl = apiURLs.getLocationByIp.locationIp;
    const cookie = getCookie("ip");

    async function fetchAPI() {
        const ip = cookie;
        const res = await fetch(`${apiUrl}`, {
            method: "POST",
            body: JSON.stringify({ ip_address: ip })
        });
        if (res.ok) {
            const data: ApiResponse = await res.json();
            return data;
        }
        else {
            throw new APPError({ data: res, message: "something went wrong", status: res.status })
        }
    }

    const { data, isLoading, refetch, error } = useQuery({
        queryFn: () => fetchAPI(),
        queryKey: [nextApiKeys.LOCATION],
    })

    return { data, isLoading, refetch, error };

}
