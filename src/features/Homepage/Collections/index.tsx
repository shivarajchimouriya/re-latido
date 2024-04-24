import React from "react";
import CollectionSwiper from "./components/CollectionSwiper";
import { mockCollections } from "@/data/mock/collection";

const Collections = () => {
  return <CollectionSwiper collection={mockCollections} />;
};

export default Collections;
