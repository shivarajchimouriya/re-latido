import PolicyContainer from "@/features/Policy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Policy",
  description: `When you register with us or voluntarily provide information, we may
request "personal information." This encompasses data that enables
us to identify you personally. The purpose of collecting this
information is multifaceted, including, but not limited to,
informing you about promotional opportunities, providing event
updates, offering services, and enhancing your experience on our
website. It's important to note that you have the option to
unsubscribe from our email list at any time, should you wish to do
so. Your privacy and preferences are of utmost importance to us.`,

  keywords: [
    "latido",
    "policy",
    "policy latido",
    "latido leather",
    "leather",
    "nepal",
    "nepali leather",
  ],
  authors: [
    { name: "latido" },
    { name: "latido nepal" },
    { name: "latido leather" },
  ],
  creator: "latido",
  publisher: "latido",
};

const Page = () => {
  return <PolicyContainer />;
};

export default Page;
