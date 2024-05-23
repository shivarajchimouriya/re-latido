"use client";
import LoadingScreen from "@/components/LoadingScreen";
import { useGetTokens } from "@/hooks/client/useGetToken";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PreventAuthScreens = ({children}:IProps) => {
  const { token, isLoading } = useGetTokens();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (token) {
    redirect("/profile");
  }
  return <> {children} </>;
};

export default PreventAuthScreens;
