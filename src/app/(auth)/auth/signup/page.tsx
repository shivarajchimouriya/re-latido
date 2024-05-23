import Signup from "@/features/Auth/Signup";
import { logger } from "@/utils/logger";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  searchParams: {
    username: string;
  };
}

const Page = ({ searchParams }: IProps) => {
  logger.log("search params", searchParams);
  const username = searchParams.username;
  if (!username) redirect("/auth");
  return <Signup username={username} />;
};

export default Page;
