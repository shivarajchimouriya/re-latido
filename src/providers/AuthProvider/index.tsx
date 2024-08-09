"use client";
import React, { ReactNode } from "react";
import { configureAmplify } from "@/config/awsConfig";

interface IProps {
  children: ReactNode;
}

configureAmplify();
const AuthProvider = ({ children }: IProps) => {
  return <> {children} </>;
};

export default AuthProvider;
