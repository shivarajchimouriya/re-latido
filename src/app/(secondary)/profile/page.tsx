import ProfilePage from "@/features/ProfilePage";
import AuthProvider from "@/providers/AuthProvider";
import { Grid } from "@chakra-ui/react";
import React from "react";
export default function Profile() {
  return (
    <Grid width={"full"} margin={"0 auto"} placeItems={"center"}>
      {" "}<ProfilePage />
    </Grid>
  );
}
