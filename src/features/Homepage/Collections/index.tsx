import React from "react";
import CollectionSwiper from "./components/CollectionSwiper";
import { mockCollections } from "@/data/mock/collection";
import { API } from "@/resources";
import { logger } from "@/utils/logger";

const getHomePageData = async () => {
  try {
    const res = await API.Homepage.get();
    return res;
  } catch (error) {
    logger.log("Error fetching data", error);
  }
};

const Collections = async() => {

const homePageData=await getHomePageData();
const products = homePageData?.data.category;
if(!products) return null;
  return <CollectionSwiper collection={products} />;
};

export default Collections;
