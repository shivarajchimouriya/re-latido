"use server";

import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { cookies } from "next/headers";

export const setGender = (gender: string) => {
  const c = cookies();
  c.set("gender", gender);
};

interface IProductProps {
  limit?: number;
  page?: number;
}
export const getProducts = async ({ limit = 10, page = 1 }: IProductProps) => {
  try {
    const res = await API.Product.getAll({
      params: { limit: limit, page: page },
    });
    return res;
  } catch (error) {
    logger.log("Error fetching data", error);
  }
};
