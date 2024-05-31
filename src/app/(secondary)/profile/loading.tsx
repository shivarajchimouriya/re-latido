import ProfileSkeleton from "@/features/ProfilePage/ProfileSkeleton";
import { Grid } from "@chakra-ui/react";
import React from "react";

export default function ProfileLoader() {
  return (
    <Grid width={"full"} margin={"0 auto"} placeItems={"center"}>
      <ProfileSkeleton />
    </Grid>
  );
}
