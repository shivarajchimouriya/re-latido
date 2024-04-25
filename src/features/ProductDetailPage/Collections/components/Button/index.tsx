"use client";

import React from "react";
import { Box, Button, Grid } from "@chakra-ui/react";

export default function ButtonComponent() {
    return <Grid width="100%" margin={"4rem 0"} placeItems="center">
        <Button padding={"1rem 2rem"} fontWeight={"bold"} fontSize={"1.4rem"} className="body-button" onClick={() => alert("Enter Body Details")}>
            Enter Body Details
        </Button>
    </Grid>;
}
