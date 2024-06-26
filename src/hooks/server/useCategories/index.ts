import { queryKeys } from "@/constants/keys";
import { API } from "@/resources";
import { useQuery } from "@tanstack/react-query";

const getCategories = () => {
  return API.Homepage.get({
    params: { gender: "female", limit: 10, page: 1 },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: [queryKeys.CATEGORIES],
    queryFn: getCategories,
    select(data) {
      return data.data.category;
    },
  });
};
