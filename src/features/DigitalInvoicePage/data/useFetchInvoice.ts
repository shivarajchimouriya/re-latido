import { queryKeys } from "@/constants/keys";
import { useGetTokens } from "@/hooks/client/useGetToken";
import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";
const getInvoiceDetail = (id: string, token: string | null) => {
  return API.Invoice.getById(id, {
    options: { headers: { Authorization: token ?? "" } },
  });
};

export const useFetchInvoice = (id: string) => {
  const { token } = useGetTokens();
  return useQuery({
    queryKey: [queryKeys.INVOICE, id],
    queryFn: () => getInvoiceDetail(id, token),
    enabled: !!token,
  });
};
