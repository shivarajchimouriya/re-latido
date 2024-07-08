"use client";
import { Flex } from "@chakra-ui/react";
import CollectionCard from "../CollectionCard";
import { ICategory } from "@/resources/Category/interface";
import { collectionImages } from "@/constants/images";
import { attachWithS3BaseUrl } from "@/utils/misc";
import { useParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
interface IProps {
  collection: ICategory[];
}

const CollectionSwiper = ({ collection }: IProps) => {
  const params = useParams();
  const [activeCategory, setactiveCategory] = useState(() => params.id);

  return (
    <Flex
      w="100%"
      p="1rem"
      pt="1.4rem"
      position="fixed"
      bg="white"
      gap="2rem"
      px=".5rem"
      maxW="500px"
      overflow="hidden"
    >
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "2rem",
          width: "100%"
        }}
        className="collection_container"
      >
        <CollectionCard
          image={collectionImages.latido}
          link={`/`}
          title={"All "}
          isActive={!params.id}
          onClick={() => {
            setactiveCategory("");
          }}
        />
        {collection.map(el => {
          const isActive = el._id === activeCategory;
          return (
            <CollectionCard
              image={attachWithS3BaseUrl(el.image)}
              link={`/category/${el._id}`}
              title={el.title}
              isActive={isActive}
              onClick={() => {
                setactiveCategory(el._id);
              }}
            />
          );
        })}
      </div>
    </Flex>
  );
};

export default CollectionSwiper;
