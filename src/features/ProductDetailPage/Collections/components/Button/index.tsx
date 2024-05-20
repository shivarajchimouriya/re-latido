"use client";
import React, { useEffect } from "react";
import {
  Button,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import SizeModal from "@/features/ProductDetailPage/Collections/components/SizeModal"

export default function ButtonComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const heightOptions = () => {
    const height = [];
    for (let heightFit = 1; heightFit <= 8; heightFit++) {
      for (let heightIn = 0; heightIn <= 12; heightIn++) {
        height.push(`${heightFit}'${heightIn}"`);
      }
    }
    return height;
  };


  return (
    <Grid width="100%" margin={"2rem 0"} placeItems="center">
      <Button
        padding={"1rem 2rem"}
        fontWeight={"bold"}
        fontSize={"1.4rem"}
        className="primary-button"
        onClick={onOpen}
      >
        Enter Body Details
      </Button>
        <SizeModal heightOptions={heightOptions} isOpen={isOpen} onClose={onClose} />
    </Grid>
  );
}
