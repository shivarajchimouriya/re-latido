import React from "react";
import ProfilePage from "@/features/ProfilePage";
import { Grid } from "@chakra-ui/react";
export default function Profile() {
  return (
    <Grid width={"full"} margin={"0 auto"} placeItems={"center"}>
      <ProfilePage />
    </Grid>
  );
}
