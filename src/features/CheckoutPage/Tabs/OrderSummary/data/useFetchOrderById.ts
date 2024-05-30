import { queryKeys } from "@/constants/keys";
import { useGetTokens } from "@/hooks/client/useGetToken";
import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";

const fetchOrderById = (orderID: string, token: string | null) => {
  return API.Order.getById(orderID, {
    options: { headers: { Authorization: token ?? "" } },
  });
};

export const useFetchOrderById = (orderID: string) => {
  const { token } = useGetTokens();
  return useQuery({
    queryKey: [queryKeys.ORDERS, orderID],
    queryFn: () => fetchOrderById(orderID, token),
    enabled: !!(orderID && token),
  });
};
