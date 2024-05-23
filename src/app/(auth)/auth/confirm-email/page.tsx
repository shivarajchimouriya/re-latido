import ConfirmEmail from "@/features/Auth/ConfirmEmail";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  searchParams: {
    username: string;
  };
}

const Page = ({ searchParams }: IProps) => {
  const username = searchParams.username;
  if (!username) redirect("/auth/signup");
  return <ConfirmEmail username={username} />;
};

export default Page;
