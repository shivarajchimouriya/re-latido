"use client";
import { Button, Grid } from "@chakra-ui/react";
export default function ButtonComponent({ onOpen }: { onOpen: () => void }) {
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
