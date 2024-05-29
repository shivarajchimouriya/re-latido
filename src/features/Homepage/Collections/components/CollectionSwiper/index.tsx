"use client";
import { Flex } from "@chakra-ui/react";
import CollectionCard from "../CollectionCard";
import { ICategory } from "@/resources/Category/interface";
import { collectionImages } from "@/constants/images";
import { attachWithS3BaseUrl } from "@/utils/misc";
import { useParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
interface IProps {
  collection: ICategory[];
}

const CollectionSwiper = ({ collection }: IProps) => {
  const params = useParams();
  const category = params.id as string;

  return (
    <Flex w="100%" m="1rem" gap="2rem" px=".5rem" overflow="auto">
      <div
        style={{ display: "flex", overflow: "auto", gap: "2rem" }}
        className="collection_container"
      >
        <CollectionCard
          image={collectionImages.latido}
          link={`/`}
          title={"All "}
          isActive={!category}
        />
        {collection.map(el => {
          const isActive = el._id === category;
          return (
            <CollectionCard
              image={attachWithS3BaseUrl(el.image)}
              link={`/category/${el._id}`}
              title={el.title}
              isActive={isActive}
            />
          );
        })}
      </div>
    </Flex>
  );
};

export default CollectionSwiper;
