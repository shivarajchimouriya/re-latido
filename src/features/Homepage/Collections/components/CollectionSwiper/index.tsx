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
    <Flex
      w="100%"
      p="1rem"
      pt="2rem"
      position="fixed"
      bg="white"
      gap="2rem"
      px=".5rem"
      overflow="auto"
    >
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "2rem",
          width: "100%",
        }}
        className="collection_container"
      >
        <CollectionCard
          image={collectionImages.latido}
          link={`/`}
          title={"All "}
          isActive={!category}
        />
        {collection.map((el) => {
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
