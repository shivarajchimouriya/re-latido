"use client";

import React from "react";
import { Button, Container, Grid } from "@chakra-ui/react";
import { BottomSheet } from "react-spring-bottom-sheet";
import SizeFrom from "../SizeForm";

export default function ButtonComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  }
  const BottomSheetUi = () => {
    return (
      <BottomSheet className="bottom-sheet" open={open} onDismiss={handleClose}>
            <Container className="bottom-sheet-container" padding={2}>
                <SizeFrom handleClose={handleClose} />
        </Container>
      </BottomSheet>
    );
  };

  return (
    <Grid width="100%" margin={"4rem 0"} placeItems="center">
      <Button
        padding={"1rem 2rem"}
        fontWeight={"bold"}
        fontSize={"1.4rem"}
        className="primary-button"
        onClick={handleClick}
      >
        Enter Body Details
      </Button>

      <BottomSheetUi />
    </Grid>
  );
}
