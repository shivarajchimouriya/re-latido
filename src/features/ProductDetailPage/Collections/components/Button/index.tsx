"use client";
import { Button, Grid } from "@chakra-ui/react";
import { IoBodyOutline } from "react-icons/io5";
export default function ButtonComponent({ onOpen }: { onOpen: () => void }) {
  return (
    <Grid width="100%" margin={"2rem 0"} placeItems="center">
      <Button
        padding={"1.3rem 2.5rem"}
        rounded="full"
        fontWeight={"bold"}
        fontSize={"1.4rem"}
        bg="white"
        color="black"
        // className="primary-button"
        onClick={onOpen}
      >
        Enter Body Details
      </Button>
    </Grid>
  );
}
