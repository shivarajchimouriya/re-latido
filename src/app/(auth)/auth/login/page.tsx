import Login from "@/features/Auth/Login";
import { redirect } from "next/navigation";
import React from "react";
interface IProps {
  searchParams: {
    username: string;
  };
}
const Page = ({ searchParams }: IProps) => {
  const username = searchParams.username;
  if (!username) redirect("/auth");
  return <Login userName={username} />;
};

export default Page;
