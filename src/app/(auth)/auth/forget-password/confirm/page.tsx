import ConfirmForgetPassword from "@/features/Auth/ConfirmForgetPassword";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  searchParams: {
    username: string;
  };
}

const Page = ({ searchParams }: IProps) => {
  const username = searchParams.username;
  if (!username) redirect("/");
  return <ConfirmForgetPassword username={username} />;
};

export default Page;
