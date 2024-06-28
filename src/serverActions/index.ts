"use server";

import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { getCookies } from "cookies-next";
import { cookies } from "next/headers";

import { gender as GENDER } from "@/enums";

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

export const getServerCookie = async () => {
  let gender;
  try {
    const ck: any = getCookies({ cookies });
    if (ck) {
      gender = ck.gender;
      if (gender !== GENDER.MALE && gender !== GENDER.FEMALE) {
        gender = GENDER.MALE;
      }
    }

    return gender;
  } catch (error) {
    logger.log(error);
  }
};
