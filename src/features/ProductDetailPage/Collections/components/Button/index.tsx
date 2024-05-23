"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, useDisclosure } from "@chakra-ui/react";
import SizeModal from "@/features/ProductDetailPage/Collections/components/SizeModal";

export default function ButtonComponent({
  productId,
  heightOptionsValues,
  setSizeDetails,
  sizeDetailSubmit,
  onOpen,
}: {
  productId: string;
  heightOptionsValues: string[];
  setSizeDetails: (prev: any) => void;
  sizeDetailSubmit: () => void;
  onOpen: () => void;
}) {
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
    </Grid>
  );
}
