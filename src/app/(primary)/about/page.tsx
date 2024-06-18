import AboutContainer from "@/features/AboutPage/AboutContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "2071 BS (2014) we started with a dream of customization of leather jackets, and we witnessed a new culture that was emerging in our community, it was redefining leather jacket culture into our daily lives which was already a part of Nepal since generations but long lost.",
  keywords: [
    "latido",
    "about",
    "about latido",
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
  return <AboutContainer />;
};

export default Page;
