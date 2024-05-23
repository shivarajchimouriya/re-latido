import ProfilePage from "@/features/ProfilePage";
import AuthProvider from "@/providers/AuthProvider";
import { Grid } from "@chakra-ui/react";
import React from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { logger } from "@/utils/logger";
import { getCurrentUser } from "aws-amplify/auth";
import { configureAmplify } from "@/config/awsConfig";
import { runWithAmplifyServerContext } from "@/lib/amplifyServerUtils";
import { cookies } from "next/headers";
export default async function Profile() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: contextSpec => getCurrentUser()
    });
    logger.log("current user", currentUser);
  } catch (err) {
    logger.log("error", err);
  }

  return (
    <Grid width={"full"} margin={"0 auto"} placeItems={"center"}>
      {" "}<ProfilePage />
    </Grid>
  );
}
